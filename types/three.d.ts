declare module "three" {
  interface JSXMesh {
    castShadow?: boolean;
    receiveShadow?: boolean;
  }
  interface JSXIcosahedronGeometry {
    args?: [size: number, detail: number];
  }
  interface JSXSphereGeometry {
    args?: [radius: number, widthSegments: number, heightSegments: number];
  }
}
