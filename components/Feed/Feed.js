import MiniProfile from "../MiniProfile/MiniProfile"
import Posts from "../Posts/Posts"

const Feed = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            <section className="col-span-2">
                <Posts />
            </section>
            <section>
                <MiniProfile/>
                {/* prof */}
                {/* users */}
            </section>
        </main>
    )
}

export default Feed