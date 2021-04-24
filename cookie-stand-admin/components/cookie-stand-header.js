import Link from 'next/link'

export default function CookieStandHeader({ username, onLogout }) {
    return (
        <header  className="box-border p-6 mb-1 text-lg font-bold bg-green-400" >
            <h1 className="text-large">
                Cookie Stand Admin
            </h1>
            <div className="inline-flex float-right space-x-2 text-xs font-small" >
                <p className="bg-green-200 rounded-l-sm rounded-r-sm ">{username}</p>
                <Link href="/">
                    <a className="bg-green-500 rounded-l rounded-r font-small" onClick={onLogout} >Sign Out</a>
                </Link>
                <nav className="text-xs bg-white rounded-sm rounded-l-sm ">
                    <Link href="/overview"><a>Overview</a></Link>
                </nav>
            </div>
        </header>
    )
}