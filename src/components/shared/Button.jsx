
function Button({children, type, isFull}) {
  return (
    <a href="#" className={`relative z-10 inline-flex justify-center items-center gap-4 font-primary px-[23px] py-[21.5px] rounded-lg border-2 uppercase font-semibold text-base leading-[1.3] tracking-[-1px] w-full cursor-pointer transition focus:outline-2 focus:outline-offset-2 hover:bg-linear-to-r ${isFull ? 'max-w-full' : 'max-w-fit'} ${ type === 'contained' ? 'bg-primary-neutral-900 text-white border-primary-neutral-900' : type === 'outlined' ? 'bg-transparent text-primary-neutral-000 border-primary-neutral-000 focus:outline-primary-neutral-200 active:outline-primary-neutral-200 hover:from-primary-neutral-700 hover:to-primary-neutral-900' : 'bg-secondary-light-salmon-050 border-primary-neutral-900 focus:outline-primary-neutral-700 active:outline-primary-neutral-700 hover:from-secondary-light-salmon-100 hover:to-secondary-light-salmon-050'}`}>{children}</a>
    )
}
export default Button