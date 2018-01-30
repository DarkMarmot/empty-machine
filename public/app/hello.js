Machine.cog({

    display: `<div id="webgl"></div>`,

    start() {
        console.log("HELLO!", THREE)

        let scene = new THREE.Scene()

        let box = this.getBox(1,1,1)
        let plane = this.getPlane(4)

        box.position.y = box.geometry.parameters.height/2
        plane.rotation.x = Math.PI/2

        scene.add(box)
        scene.add(plane)

        let camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth/window.innerHeight,
            1,
            1000
        )

        camera.position.x = 1

        camera.position.y = 2

        camera.position.z = 5

        camera.lookAt(new THREE.Vector3(0,0,0))

        let renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)

        document.getElementById('webgl').appendChild(renderer.domElement)

        // renderer.render(
        //     scene,
        //     camera
        // )
        this.update(renderer, scene, camera)

        window.scene = scene
    },
    getBox(w,d,h) {
        let geometry = new THREE.BoxGeometry(w,d,h)

        let material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        })

        let mesh = new THREE.Mesh(
            geometry,
            material
        )

        return mesh
    },
    getPlane(size) {
        let geometry = new THREE.PlaneGeometry(size, size)

        let material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            side: THREE.DoubleSide
        })

        let mesh = new THREE.Mesh(
            geometry,
            material
        )

        return mesh
    },
    update(renderer,scene,camera) {
        renderer.render(
            scene,
            camera
        )
        requestAnimationFrame(() => {
            this.update(renderer, scene, camera)
        })
    }
});