export default function Sidebar({links, close}){
    return(
        <div className="sidebar" onClick={close}>
{links.map(link => (
    <a className="sidebar-link " href="#!" key={link.name}>{link.name}</a>
))}
        </div>
    )
}