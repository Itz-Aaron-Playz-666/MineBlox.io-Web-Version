import * as three from 'three';
import { GLTFLoader } from 'three/addons';
const box = (x: number, y: number, z: number) => {
    new three.BoxGeometry(x, y, z);
}
box(1,1,1);