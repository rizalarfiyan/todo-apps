export type LoadingScreenProps = React.HTMLAttributes<HTMLDivElement> &
  ILoadingScreenProps

export interface ILoadingScreenProps {
  reason?: string
}
