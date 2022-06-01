import { PerspectiveCamera, Group } from 'three';

declare global {
  interface Window {
    camera: PerspectiveCamera;
    flute: Group;
  }
}
