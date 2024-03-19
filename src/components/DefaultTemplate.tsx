import Nav from './Nav'

export default function defaultTemplate({children}: {children: React.ReactNode}) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}