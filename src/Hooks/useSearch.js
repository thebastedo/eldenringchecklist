import { useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')

  const searchFilter = needle =>
    needle.toLocaleLowerCase().includes(search.toLocaleLowerCase())

  return { search, setSearch, searchFilter }
}
