
const appRoot = document.getElementById('app');
const toggleVisibility = () => {
    visibility = !visibility
    render()
}

let visibility = false

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey, these are some details</p>
                </div>
            )}

        </div>
    )

    ReactDOM.render(jsx, appRoot)
}
render()