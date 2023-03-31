import React from 'react'
import { Link } from 'react-router-dom'

import Error from './Error'
import { NotFoundProps } from './Error.types'

const NotFound: React.FC<NotFoundProps> = ({ parentPath }) => {
  return (
    <Error code='404' title='Halaman Tidak Ditemukan'>
      <div className='mt-2'>
        Halaman yang Anda cari tidak ada atau terjadi kesalahan lain. Kembali ke{' '}
        <Link to={parentPath || '.'} className='text-gray-700 underline'>
          halaman utama
        </Link>
        .
      </div>
    </Error>
  )
}

export default NotFound
