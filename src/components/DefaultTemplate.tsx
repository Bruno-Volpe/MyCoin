import Nav from './Nav'

export default function defaultTemplate({children}: {children: React.ReactNode}) {
    return (
        <>
            <Nav />
            <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto px-12 flex flex-row items-start">
                {children}
            </div>
        </>
    )
}