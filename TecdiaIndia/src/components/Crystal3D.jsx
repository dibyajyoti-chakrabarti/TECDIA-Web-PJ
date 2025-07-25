import React, { useEffect, useRef, useState } from "react";
import * as THREE from 'three';

// Enhanced Crystal Component with scroll-responsive rotation and mouse interaction
const Crystal3D = () => {
  const mountRef = useRef(null);
  const crystalRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotationSpeed] = useState({ x: 0.005, y: 0.0075, z: 0.0015 });
  const [autoRotate, setAutoRotate] = useState(true);
  
  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    rendererRef.current = renderer;
    
    // Make the crystal bigger by increasing the canvas size
    renderer.setSize(500, 500);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create a group to hold the crystal for easier manipulation
    const crystalGroup = new THREE.Group();
    scene.add(crystalGroup);
    crystalRef.current = crystalGroup;

    // Create an improved crystal geometry
    const mainGeometry = new THREE.IcosahedronGeometry(8, 0); // Larger base size
    
    // Create a more realistic crystal material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xf00000, // Light blue color
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.95,
      transparent: true,
      opacity: 0.9,
      reflectivity: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      ior: 1.5,  // Index of refraction like glass/diamond
    });
    
    // Create the crystal and add to the group
    const crystal = new THREE.Mesh(mainGeometry, material);
    crystalGroup.add(crystal);
    
    // Enhanced lighting setup for better shine
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light for stronger highlights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);
    
    // Add colorful point lights for rainbow reflections
    const pointLight1 = new THREE.PointLight(0x8844ff, 3);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x44aaff, 3);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xff44aa, 3);
    pointLight3.position.set(0, 10, -10);
    scene.add(pointLight3);
    
    // Position camera
    camera.position.z = 18;
    
    // Give the crystal an initial rotation
    crystalGroup.rotation.x = 0.5;
    crystalGroup.rotation.y = 0.5;
    
    // Clean up
    return () => {
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);
  
  // Handle scroll to adjust speed
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll position as percentage of page height
      const scrollPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(scrollPosition / scrollHeight, 1);
      
      // Smooth speed adjustment - base speed plus a small multiplier based on scroll
      const targetSpeed = 1 + scrollPercentage * 10; // Max speed increase when scrolled to bottom
      
      // Use smooth interpolation for the speed change
      setScrollSpeed(prev => {
        return prev + (targetSpeed - prev) * 1; // The factor controls smoothness
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = 1;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(500, 500);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Add mouse interaction handlers
  useEffect(() => {
    if (!mountRef.current) return;
    
    const containerElement = mountRef.current;
    
    const handleMouseDown = (e) => {
      setIsMouseDown(true);
      setAutoRotate(false);
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    const handleMouseMove = (e) => {
      if (isMouseDown && crystalRef.current) {
        // Calculate how much the mouse has moved
        const deltaX = e.clientX - mousePosition.x;
        const deltaY = e.clientY - mousePosition.y;
        
        // Update crystal rotation based on mouse movement
        crystalRef.current.rotation.y += deltaX * 0.01;
        crystalRef.current.rotation.x += deltaY * 0.01;
        
        // Update mouse position
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      }
    };
    
    const handleMouseUp = () => {
      setIsMouseDown(false);
      setAutoRotate(true);
    };
    
    const handleMouseLeave = () => {
      setIsMouseDown(false);
      setAutoRotate(true);
    };
    
    // Add touch support for mobile
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        setIsMouseDown(true);
        setAutoRotate(false);
        setMousePosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        });
      }
    };
    
    const handleTouchMove = (e) => {
      if (isMouseDown && crystalRef.current && e.touches.length === 1) {
        // Calculate how much the touch has moved
        const deltaX = e.touches[0].clientX - mousePosition.x;
        const deltaY = e.touches[0].clientY - mousePosition.y;
        
        // Update crystal rotation based on touch movement
        crystalRef.current.rotation.y += deltaX * 0.01;
        crystalRef.current.rotation.x += deltaY * 0.01;
        
        // Update touch position
        setMousePosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        });
      }
    };
    
    const handleTouchEnd = () => {
      setIsMouseDown(false);
      setAutoRotate(true);
    };
    
    // Add event listeners
    containerElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    containerElement.addEventListener('mouseleave', handleMouseLeave);
    
    // Touch events
    containerElement.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    // Clean up
    return () => {
      containerElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      containerElement.removeEventListener('mouseleave', handleMouseLeave);
      
      containerElement.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMouseDown, mousePosition]);
  
  // Animation loop with scroll-sensitive rotation speed
  useEffect(() => {
    let animationId;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      if (crystalRef.current && rendererRef.current && sceneRef.current && cameraRef.current) {
        // Apply auto-rotation only when not being dragged
        if (autoRotate) {
          // Apply rotations with speed multiplier
          crystalRef.current.rotation.x += rotationSpeed.x * scrollSpeed;
          crystalRef.current.rotation.y += rotationSpeed.y * scrollSpeed;
          crystalRef.current.rotation.z += rotationSpeed.z * scrollSpeed;
        }
        
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [scrollSpeed, autoRotate, rotationSpeed]);
  
  return (
    <div 
      ref={mountRef} 
      className="crystal-container absolute lg:top-0 w-64 h-64 md:w-80 md:h-80 z-10"
      style={{
        filter: "drop-shadow(0 0 15px rgba(120, 80, 255, 0.3))",
        willChange: "transform",
        top: "-20%",
        // left: "80%",
        // transform: "translateX(-50%)"
      }}
    />
  );
};

export default Crystal3D;