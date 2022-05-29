export const Header = (props)=>{
    return (
        <div>
            <div className="container" style={{backgroundColor: 'blue'}}>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}