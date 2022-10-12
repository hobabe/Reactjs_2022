function HandlingEvent() {
    function handleSubmit(es) {
        es.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}
export default HandlingEvent;