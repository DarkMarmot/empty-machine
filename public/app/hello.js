Machine.cog({

    display: `<div id="webgl"></div>`,

    start() {
        console.log("HELLO!", THREE)

        let enableFog = false

        if (enableFog) {
            scene.fog = new THREE.FogExp2(0xffffff, 0.2)

        }

        let scene = new THREE.Scene()


        let box = this.getBox(1,1,1)
        let plane = this.getPlane(20)
        let pointLight = this.getPointLight(1)
        let sphere = this.getSphere(0.05)

        plane.name = 'plane-1'
        box.name = 'box-1'

        box.position.y = box.geometry.parameters.height/2
        plane.rotation.x = Math.PI/2
        pointLight.position.y = 1.5

        scene.add(box)
        scene.add(plane)
        scene.add(pointLight)

        pointLight.add(sphere)

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

        renderer.setClearColor('rgb(120,120,120)')

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

        let material = new THREE.MeshPhongMaterial({
            color: 'rgb(120,120,120)'
        })

        let mesh = new THREE.Mesh(
            geometry,
            material
        )

        return mesh
    },
    getPlane(size) {
        let geometry = new THREE.PlaneGeometry(size, size)

        let material = new THREE.MeshPhongMaterial({
            color: 'rgb(120,120,120)',
            side: THREE.DoubleSide
        })

        let mesh = new THREE.Mesh(
            geometry,
            material
        )

        return mesh
    },
    update(renderer, scene,camera) {
        renderer.render(
            scene,
            camera
        )

        let box = scene.getObjectByName('box-1')
        box.rotation.y += 0.031
        box.rotation.z += 0.031

        // scene.traverse(function(child) {
        //     child.scale.x += 0.001
        // })

        requestAnimationFrame(() => {
            this.update(renderer, scene, camera)
        })
    },
    getPointLight(intensity) {
        let light = new THREE.PointLight(0xffffff, intensity)
        return light
    },
    getSphere(size) {
        let geometry = new THREE.SphereGeometry(size, 24, 24)

        let material = new THREE.MeshBasicMaterial({
            color: 'white'
        })

        let mesh = new THREE.Mesh(
            geometry,
            material
        )

        return mesh
    },
});