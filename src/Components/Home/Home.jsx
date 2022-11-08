import Visit from '../Ui/Visit/Visit';
import { Header, Materials, Interiors, NestingHouse, UpComingProjects, OurTeam } from './INDEX';


const Home = () => {
    return (
        <>
            <Header />
            <Materials />
            <Interiors />
            <NestingHouse />
            <UpComingProjects />
            <OurTeam />
            <Visit />
        </>
    )
}

export default Home