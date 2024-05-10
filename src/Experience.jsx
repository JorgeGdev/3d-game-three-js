import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import {Level} from './Level.js'
import { Physics } from '@react-three/rapier'
import Player from './Player.js'
import useGame from './stores/useGame.js'


export default function Experience()
{

    const blockCounts = useGame((state)=>state.blocksCount)
    const blocksSeed = useGame((state)=>state.blocksSeed)
    return <>

        {/* <OrbitControls makeDefault /> */}


        <color args={["#bdedfc"]} attach="background" />
        <Physics debug={false}>
        <Lights />
        <Level count={blockCounts} seed={blocksSeed} />
        <Player />
        </Physics>

        

        



    </>
}