import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  offset as fuiOffset,
  size as fuiSize,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react-dom-interactions'
import clsx from 'clsx'
import {
  AnimatePresence,
  motion,
  useIsomorphicLayoutEffect,
} from 'framer-motion'
import React, { createContext, forwardRef, useContext } from 'react'

import Icon from '@components/Icon'

import { SelectContextData, SelectProps } from './Select.types'

export const SelectContext = createContext<SelectContextData>(
  {} as SelectContextData
)

export const useSelectContext = () => useContext(SelectContext)

function usePrevious<T>(value: T) {
  const ref = React.useRef<T>()

  useIsomorphicLayoutEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    arrow,
    value,
    onChange,
    selected,
    offset = 6,
    dismiss,
    lockScroll,
    menuProps,
    className,
    disabled,
    children,
    ...rest
  } = props

  const listItemsRef = React.useRef<Array<HTMLLIElement | null>>([])
  const listContentRef = React.useRef([
    ...(React.Children.map(children, (child) => {
      const { props }: any = child
      return props?.value
    }) ?? []),
  ])
  const [open, setOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [controlledScrolling, setControlledScrolling] = React.useState(false)
  const prevActiveIndex = usePrevious<number | null>(activeIndex)

  React.useEffect(() => {
    setSelectedIndex(Math.max(0, listContentRef.current.indexOf(value) + 1))
  }, [value])

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
    refs,
    middlewareData,
    update,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [
      fuiOffset(offset),
      flip({ padding: 8 }),
      fuiSize({
        apply({ rects, elements }: any) {
          Object.assign(elements?.floating?.style, {
            width: `${rects?.reference?.width}px`,
            zIndex: 99,
          })
        },
        padding: 20,
      }),
    ],
  })

  const floatingRef = refs.floating

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useClick(context),
      useRole(context, { role: 'listbox' }),
      useDismiss(context, { ...dismiss }),
      useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        selectedIndex,
        onNavigate: setActiveIndex,
      }),
      useTypeahead(context, {
        listRef: listContentRef,
        onMatch: open ? setActiveIndex : setSelectedIndex,
        activeIndex,
        selectedIndex,
      }),
    ]
  )

  React.useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update)
    }
  }, [refs.reference, refs.floating, open, update])

  useIsomorphicLayoutEffect(() => {
    const floating = floatingRef.current

    if (open && controlledScrolling && floating) {
      const item =
        activeIndex != null
          ? listItemsRef.current[activeIndex]
          : selectedIndex != null
          ? listItemsRef.current[selectedIndex]
          : null

      if (item && prevActiveIndex != null) {
        const itemHeight =
          listItemsRef.current[prevActiveIndex]?.offsetHeight ?? 0
        const floatingHeight = floating.offsetHeight
        const top = item.offsetTop
        const bottom = top + itemHeight

        if (top < floating.scrollTop) {
          floating.scrollTop -= floating.scrollTop - top + 5
        } else if (bottom > floatingHeight + floating.scrollTop) {
          floating.scrollTop += bottom - floatingHeight - floating.scrollTop + 5
        }
      }
    }
  }, [open, controlledScrolling, prevActiveIndex, activeIndex])

  useIsomorphicLayoutEffect(() => {
    const floating = refs.floating.current
    if (open && floating && floating.offsetHeight < floating.scrollHeight) {
      const item = listItemsRef.current[selectedIndex]
      if (item) {
        floating.scrollTop =
          item.offsetTop - floating.offsetHeight / 2 + item.offsetHeight / 2
      }
    }
  }, [open, selectedIndex, refs.floating, refs.reference, middlewareData])

  const contextValue = React.useMemo(
    () => ({
      selectedIndex,
      setSelectedIndex,
      listRef: listItemsRef,
      setOpen,
      onChange: onChange || (() => {}),
      activeIndex,
      setActiveIndex,
      getItemProps,
      dataRef: context.dataRef,
    }),
    [selectedIndex, onChange, activeIndex, getItemProps, context.dataRef]
  )

  const animation = {
    unmount: {
      opacity: 0,
      transformOrigin: 'top',
      transform: 'scale(0.95)',
      transition: {
        duration: 0.2,
      },
    },
    mount: {
      opacity: 1,
      transformOrigin: 'top',
      transform: 'scale(1)',
      transition: {
        duration: 0.2,
      },
    },
  }

  const selectMenu = (
    <FloatingFocusManager context={context}>
      <motion.ul
        {...getFloatingProps({
          ...menuProps,
          ref: floating,
          role: 'listbox',
          className: 'select-content',
          style: {
            position: strategy,
            top: y ?? '',
            left: x ?? '',
            overflow: 'auto',
          },
          onPointerEnter(e) {
            const onPointerEnter = menuProps?.onPointerEnter
            if (typeof onPointerEnter === 'function') {
              onPointerEnter(e)
              setControlledScrolling(false)
            }
            setControlledScrolling(false)
          },
          onPointerMove(e) {
            const onPointerMove = menuProps?.onPointerMove
            if (typeof onPointerMove === 'function') {
              onPointerMove(e)
              setControlledScrolling(false)
            }
            setControlledScrolling(false)
          },
          onKeyDown(e) {
            const onKeyDown = menuProps?.onKeyDown
            if (typeof onKeyDown === 'function') {
              onKeyDown(e)
              setControlledScrolling(true)
            }
            setControlledScrolling(true)
          },
        })}
        initial='unmount'
        exit='unmount'
        animate={open ? 'mount' : 'unmount'}
        variants={animation}
      >
        {React.Children.map(
          children,
          (child, index) =>
            React.isValidElement(child) &&
            React.cloneElement(child, {
              ...child.props,
              index: child.props?.index || index + 1,
              id: `select-${index}`,
            })
        )}
      </motion.ul>
    </FloatingFocusManager>
  )

  return (
    <SelectContext.Provider value={contextValue}>
      <div ref={ref} className='select-wrapper'>
        <button
          type='button'
          {...getReferenceProps({
            ...rest,
            ref: reference,
            className: clsx('select', className),
            disabled: disabled,
          })}
        >
          {typeof selected === 'function' ? (
            <span>
              {selected(
                (children as any)[selectedIndex - 1],
                selectedIndex - 1
              )}
            </span>
          ) : (
            <span {...(children as any)[selectedIndex - 1]?.props} />
          )}
          {arrow ?? (
            <Icon type='arrow' className={clsx('arrow', open && 'active')} />
          )}
        </button>
        <FloatingPortal>
          <AnimatePresence initial={false}>
            {open && (
              <>
                {lockScroll ? (
                  <FloatingOverlay lockScroll>{selectMenu}</FloatingOverlay>
                ) : (
                  selectMenu
                )}
              </>
            )}
          </AnimatePresence>
        </FloatingPortal>
      </div>
    </SelectContext.Provider>
  )
})

Select.displayName = 'Select'

export default Select
