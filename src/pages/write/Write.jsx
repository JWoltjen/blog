import './Write.css'

export default function Write() {
    return (
        <div className="write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlfor="fileInput">
                        <i class="fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" />
                    <input type="text" placeholder="Title"/>
                </div>
            </form>
        </div>
    )
}
