import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

type EffectMode = 'useEffect' | 'useLayoutEffect'

function nowLabel() {
  const d = new Date()
  const ms = String(d.getMilliseconds()).padStart(3, '0')
  return `${d.toLocaleTimeString()}.${ms}`
}

/** ===== Demo: useImperativeHandle ===== */
type ImperativeInputHandle = {
  focus: () => void
  clear: () => void
  setValue: (v: string) => void
  getValue: () => string
}

const ImperativeInput = forwardRef<ImperativeInputHandle, { initialValue?: string; label?: string }>(
  function ImperativeInput({ initialValue = '', label = 'Imperative input' }, ref) {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState(initialValue)

    useImperativeHandle(
      ref,
      () => ({
        focus() {
          inputRef.current?.focus()
        },
        clear() {
          setValue('')
          // focus luôn để thấy rõ “imperative action”
          inputRef.current?.focus()
        },
        setValue(v: string) {
          setValue(v)
          inputRef.current?.focus()
        },
        getValue() {
          return value
        },
      }),
      [value]
    )

    return (
      <label style={{ display: 'grid', gap: 6 }}>
        <span style={{ fontSize: 12, color: '#555' }}>{label}</span>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Gõ gì đó…"
          style={{
            padding: '10px 12px',
            borderRadius: 10,
            border: '1px solid #ddd',
            outline: 'none',
          }}
        />
      </label>
    )
  }
)

/** ===== Demo: useImperativeHandle (Modal) ===== */
type ModalHandle = {
  open: () => void
  close: () => void
  toggle: () => void
  isOpen: () => boolean
}

const ImperativeModal = forwardRef<
  ModalHandle,
  { title?: string; children?: React.ReactNode }
>(function ImperativeModal({ title = 'Modal', children }, ref) {
  const [open, setOpen] = useState(false)

  useImperativeHandle(
    ref,
    () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen((v) => !v),
      isOpen: () => open,
    }),
    [open]
  )

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={() => setOpen(false)}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.35)',
        display: 'grid',
        placeItems: 'center',
        padding: 16,
        zIndex: 50,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(520px, 100%)',
          background: '#fff',
          borderRadius: 14,
          border: '1px solid #eee',
          boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
          padding: 14,
          display: 'grid',
          gap: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <strong style={{ fontSize: 14 }}>{title}</strong>
          <button
            onClick={() => setOpen(false)}
            style={{
              padding: '6px 10px',
              borderRadius: 10,
              border: '1px solid #ddd',
              background: '#fafafa',
              cursor: 'pointer',
            }}
          >
            Đóng
          </button>
        </div>

        <div style={{ color: '#444', lineHeight: 1.5, fontSize: 13 }}>{children}</div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, flexWrap: 'wrap' }}>
          <button
            onClick={() => setOpen(false)}
            style={{
              padding: '8px 10px',
              borderRadius: 10,
              border: '1px solid #ddd',
              background: '#fafafa',
              cursor: 'pointer',
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
})

function UseLayoutEffectuseImperativeHandle() {
  /** ===== Demo: useEffect vs useLayoutEffect ===== */
  const [mode, setMode] = useState<EffectMode>('useEffect')
  const [text, setText] = useState('Nhãn ngắn')
  const [measuredWidth, setMeasuredWidth] = useState(0)
  const [mountId, setMountId] = useState(0)
  const [lastMeasuredAt, setLastMeasuredAt] = useState<string>('-')
  const boxRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (mode !== 'useLayoutEffect') return
    if (!boxRef.current) return

    const rect = boxRef.current.getBoundingClientRect()
    const width = Math.round(rect.width)
    setMeasuredWidth(width)
    setLastMeasuredAt(`${nowLabel()} (layout)`)
    console.log(`[${nowLabel()}] useLayoutEffect measured width = ${width}`)
  }, [text, mode, mountId])

  useEffect(() => {
    if (mode !== 'useEffect') return
    if (!boxRef.current) return

    const rect = boxRef.current.getBoundingClientRect()
    const width = Math.round(rect.width)
    setMeasuredWidth(width)
    setLastMeasuredAt(`${nowLabel()} (effect)`)
    console.log(`[${nowLabel()}] useEffect measured width = ${width}`)
  }, [text, mode, mountId])

  /** ===== Demo: useImperativeHandle (Modal) ===== */
  const modalRef = useRef<ModalHandle | null>(null)
  const [modalStateLabel, setModalStateLabel] = useState('unknown')

  return (
    <div
      style={{
        maxWidth: 920,
        margin: '0 auto',
        padding: 16,
        display: 'grid',
        gap: 14,
      }}
    >
      <header style={{ display: 'grid', gap: 6 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Hooks demos</h2>
        <p style={{ margin: 0, color: '#666', lineHeight: 1.5 }}>
          1) So sánh <strong>useEffect</strong> vs <strong>useLayoutEffect</strong> khi đo layout. 2)
          Ví dụ <strong>useImperativeHandle</strong> để expose API từ child lên parent.
        </p>
      </header>

      {/* ===== Card 1: useEffect vs useLayoutEffect ===== */}
      <section
        style={{
          border: '1px solid #eee',
          borderRadius: 14,
          padding: 14,
          background: '#fff',
          display: 'grid',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ display: 'grid', gap: 4 }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>Demo: useEffect vs useLayoutEffect</h3>
            <span style={{ fontSize: 12, color: '#666' }}>
              Last measured: <strong>{lastMeasuredAt}</strong>
            </span>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ fontSize: 13, color: '#444' }}>Chế độ</span>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value as EffectMode)}
                style={{
                  padding: '8px 10px',
                  borderRadius: 10,
                  border: '1px solid #ddd',
                }}
              >
                <option value="useEffect">useEffect</option>
                <option value="useLayoutEffect">useLayoutEffect</option>
              </select>
            </label>

            <button
              onClick={() =>
                setText((prev) =>
                  prev === 'Nhãn ngắn' ? 'Nhãn dài hơn để bạn thấy width thay đổi' : 'Nhãn ngắn'
                )
              }
              style={{
                padding: '8px 10px',
                borderRadius: 10,
                border: '1px solid #ddd',
                background: '#fafafa',
                cursor: 'pointer',
              }}
            >
              Đổi nội dung
            </button>

            <button
              onClick={() => {
                setMeasuredWidth(0)
                setMountId((prev) => prev + 1)
              }}
              style={{
                padding: '8px 10px',
                borderRadius: 10,
                border: '1px solid #ddd',
                background: '#fafafa',
                cursor: 'pointer',
              }}
            >
              Remount
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gap: 10,
            padding: 12,
            borderRadius: 12,
            background: '#fafafa',
            border: '1px dashed #e5e5e5',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 13, color: '#444' }}>
              Width đo được: <strong>{measuredWidth}px</strong>
            </span>
            <span style={{ fontSize: 12, color: '#777' }}>
              Tip: chọn <strong>useEffect</strong> rồi bấm <strong>Remount</strong> để thấy underline animate từ
              0 → width.
            </span>
          </div>

          <div style={{ display: 'grid', gap: 10, justifyItems: 'start' }}>
            <div
              key={mountId}
              ref={boxRef}
              style={{
                display: 'inline-block',
                padding: '10px 12px',
                border: '1px solid #ddd',
                borderRadius: 10,
                background: '#fff',
                width: 'fit-content',
              }}
            >
              {text}
            </div>

            <div
              aria-hidden
              style={{
                height: 10,
                width: measuredWidth,
                background: 'linear-gradient(90deg, #646cff, #61dafb)',
                borderRadius: 999,
                transition: 'width 350ms ease',
              }}
            />
          </div>
        </div>

        
      </section>

      {/* ===== Card 2: useImperativeHandle ===== */}
      <section
        style={{
          border: '1px solid #eee',
          borderRadius: 14,
          padding: 14,
          background: '#fff',
          display: 'grid',
          gap: 12,
        }}
      >
        <h3 style={{ margin: 0, fontSize: 16 }}>Demo: useImperativeHandle (Modal)</h3>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={() => {
              modalRef.current?.open()
              setModalStateLabel('open()')
            }}
            style={{
              padding: '8px 10px',
              borderRadius: 10,
              border: '1px solid #ddd',
              background: '#fafafa',
              cursor: 'pointer',
            }}
          >
            Open modal
          </button>

          <button
            onClick={() => {
              modalRef.current?.close()
              setModalStateLabel('close()')
            }}
            style={{
              padding: '8px 10px',
              borderRadius: 10,
              border: '1px solid #ddd',
              background: '#fafafa',
              cursor: 'pointer',
            }}
          >
            Close modal
          </button>

          <button
            onClick={() => {
              modalRef.current?.toggle()
              setModalStateLabel('toggle()')
            }}
            style={{
              padding: '8px 10px',
              borderRadius: 10,
              border: '1px solid #ddd',
              background: '#fafafa',
              cursor: 'pointer',
            }}
          >
            Toggle
          </button>

          <button
            onClick={() => {
              const open = modalRef.current?.isOpen() ?? false
              setModalStateLabel(`isOpen() = ${open}`)
            }}
            style={{
              padding: '8px 10px',
              borderRadius: 10,
              border: '1px solid #ddd',
              background: '#fafafa',
              cursor: 'pointer',
            }}
          >
            isOpen?
          </button>

          <span style={{ fontSize: 13, color: '#444' }}>
            Last action: <strong>{modalStateLabel}</strong>
          </span>
        </div>

        

        <ImperativeModal ref={modalRef} title="Imperative Modal">
          Đây là ví dụ dễ nhìn về <code>useImperativeHandle</code>: parent gọi <code>modalRef.current.open()</code> để
          mở modal.
          <br />
          Click ra ngoài overlay để đóng.
        </ImperativeModal>
      </section>
    </div>
  )
}

export default UseLayoutEffectuseImperativeHandle