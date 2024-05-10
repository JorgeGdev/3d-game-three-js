import { DoubleSide } from "three"

export default function Cylinder()

{
    return <mesh position-z={-10} rotation-y={Math.PI * -0.65} rotation-x={Math.PI * 0.5}>
        <cylinderGeometry args={[3, 3, 10, 15, 1, true, 0, 4]}  />

        <meshStandardMaterial side={DoubleSide} />
    </mesh>
}