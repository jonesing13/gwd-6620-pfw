export function Page(props) {
    return (
        <div>
            <div id="masthead">A Totally Bitchin Website</div>
            {
                props.children
            }

        </div>
    )
}