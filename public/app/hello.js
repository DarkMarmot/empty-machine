Machine.cog({

    display: `<div id="webgl"></div>`,

    start() {
        console.log("HELLO!", THREE)

        let scene = new THREE.Scene()

        let box = this.getBox(1,1,1)

        scene.add(box)

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

        renderer.render(
            scene,
            camera
        )
    },
    getBox(x,y,z) {
        let geometry = new THREE.BoxGeometry(1,1,1)

        let material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        })

        let mesh = new THREE.Mesh(
            geometry,
            material
        )

        return mesh
    }


});