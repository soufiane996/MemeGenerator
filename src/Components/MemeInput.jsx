import "./stylings/MemeInput.css"

function MemeInput() {

    return (
        <section className="meme--input">
            <div className="input--form">
                <input type="text" placeholder="Enter Meme start"/>
                <input type="text" placeholder="Enter Meme start"/>
            </div>
            <button>Create Meme</button>


        </section>
    )
}

export default MemeInput
