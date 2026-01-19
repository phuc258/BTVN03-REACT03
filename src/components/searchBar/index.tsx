import {
    forwardRef,
    useImperativeHandle,
    useLayoutEffect,
    useRef,
} from "react";

export type SearchBarHandle = {
    focus: () => void;
    clear: () => void;
    getValue: () => string;
    setValue: (v: string) => void;
};

type SearchBarProps = {
    value: string;
    onValueChange: (v: string) => void;
    onSearch: (value: string) => void;
    onClear?: () => void;
    placeholder?: string;
    autoFocus?: boolean;
};

const SearchBar = forwardRef<SearchBarHandle, SearchBarProps>(function SearchBar(
    {
        value,
        onValueChange,
        onSearch,
        onClear,
        placeholder = "Tìm kiếm...",
        autoFocus = true,
    },
    ref
) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    // useLayoutEffect
    useLayoutEffect(() => {
        if (autoFocus) inputRef.current?.focus();
    }, [autoFocus]);

    // useImperativeHandle
    useImperativeHandle(
        ref,
        () => ({
            focus: () => inputRef.current?.focus(),
            clear: () => {
                onValueChange("");
                onClear?.();
                inputRef.current?.focus();
            },
            getValue: () => value,
            setValue: (v: string) => onValueChange(v),
        }),
        [onClear, onValueChange, value]
    );

    const triggerSearch = () => onSearch(value);

    return (
        <div className="search-container">
            <div className="input-wrapper">
                <input
                    ref={inputRef}
                    type="text"
                    className="input-search"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onValueChange(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && triggerSearch()}
                />
                {value && (
                    <button
                        className="clear-btn"
                        onClick={() => {
                            onValueChange("");
                            onClear?.();
                            inputRef.current?.focus();
                        }}
                        type="button"
                    >
                        ✕
                    </button>
                )}
            </div>
                
            <button className="search-btn" type="button" onClick={triggerSearch}>
                Tìm
            </button>
        </div>
    );
});

export default SearchBar;