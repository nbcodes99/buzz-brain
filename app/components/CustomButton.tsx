interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

export default function CustomButton({
  children,
  disabled,
  className = "",
  ...props
}: CustomButtonProps) {
  return (
    <button
      className={`
        w-full
        min-h-[60px]
        px-2
        py-2
        bg-zinc-800
        text-zinc-200
        font-medium
        rounded-md
        shadow-sm
        hover:bg-amber-900
        transition
        text-sm
        disabled:opacity-50
        disabled:cursor-not-allowed
        break-words
        text-center
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
