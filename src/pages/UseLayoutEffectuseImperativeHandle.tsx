import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

/** Example of useImperativeHandle */
type SearchInputHandle = {
  focus: () => void
  clear: () => void
  setValue: (v: string) => void
  getValue: () => string
}

const SearchInput = forwardRef<SearchInputHandle, { placeholder?: string }>(
  function SearchInput({ placeholder = 'Search...' }, ref) {
    const inputDomRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')

    useImperativeHandle(
      ref,
      () => ({
        focus() {
          inputDomRef.current?.focus()
        },
        clear() {
          setValue('')
          inputDomRef.current?.focus()
        },
        setValue(v: string) {
          setValue(v)
          inputDomRef.current?.focus()
        },
        getValue() {
          return value
        },
      }),
      [value],
    )

    return (
      <input
        ref={inputDomRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    )
  },
)

function UseLayoutEffectuseImperativeHandle() {
  /** Example of useLayoutEffect */
  const [count, setCount] = useState(0)

  useEffect(() => {
  if (count > 3) {
    setCount(0)
  }
}, [count])



  const handleRun = () => {setCount( count + 1)}

  /** Example of useImperativeHandle */
  const searchRef = useRef<SearchInputHandle | null>(null)

  return (
    <>
      <h3>useLayoutEffect demo</h3>
      <div>{count}</div>
      <button onClick={handleRun}>Run</button>

      <hr />


      <h3>useImperativeHandle demo</h3>

      <SearchInput ref={searchRef} />

      <div>
        <button onClick={() => searchRef.current?.focus()}>Focus</button>
        <button onClick={() => searchRef.current?.clear()}>Clear</button>
        <button onClick={() => searchRef.current?.setValue('Hello')}>
          Set "Hello"
        </button>
        <button
          onClick={() => {
            const v = searchRef.current?.getValue() ?? ''
            alert(`Current value: ${v}`)
          }}
        >
          Get value
        </button>
      </div>
    </>
  )
}

export default UseLayoutEffectuseImperativeHandle;