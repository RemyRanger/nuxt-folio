<template>
  <div
    ref="containerRef"
    aria-hidden="true"
  >
    <canvas ref="canvasRef" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  quantity: { type: Number, default: 60 },
  staticity: { type: Number, default: 80 },
  ease: { type: Number, default: 50 },
  refresh: { type: Boolean, default: false }
})

const canvasRef = ref(null)
const containerRef = ref(null)

// Deliberately plain (non-reactive) state: these are mutated on every animation
// frame, and Vue's reactivity on the hot path costs far more than it buys.
let context = null
let circles = []
let frameId = null
let dpr = 1
const mouse = { x: 0, y: 0 }
const canvasSize = { w: 0, h: 0 }

const circleParams = () => ({
  x: Math.floor(Math.random() * canvasSize.w),
  y: Math.floor(Math.random() * canvasSize.h),
  translateX: 0,
  translateY: 0,
  size: Math.floor(Math.random() * 2) + 1,
  alpha: 0,
  targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
  dx: (Math.random() - 0.5) * 0.2,
  dy: (Math.random() - 0.5) * 0.2,
  magnetism: 0.1 + Math.random() * 4
})

const drawCircle = (circle) => {
  if (!context) {
    return
  }
  context.translate(circle.translateX, circle.translateY)
  context.beginPath()
  context.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI)
  context.fillStyle = `rgba(255, 255, 255, ${circle.alpha})`
  context.fill()
  context.setTransform(dpr, 0, 0, dpr, 0, 0)
}

const clearContext = () => context?.clearRect(0, 0, canvasSize.w, canvasSize.h)

const resizeCanvas = () => {
  if (!containerRef.value || !canvasRef.value || !context) {
    return
  }
  canvasSize.w = containerRef.value.offsetWidth
  canvasSize.h = containerRef.value.offsetHeight
  canvasRef.value.width = canvasSize.w * dpr
  canvasRef.value.height = canvasSize.h * dpr
  canvasRef.value.style.width = `${canvasSize.w}px`
  canvasRef.value.style.height = `${canvasSize.h}px`
  context.setTransform(dpr, 0, 0, dpr, 0, 0)
}

const initCanvas = () => {
  resizeCanvas()
  circles = Array.from({ length: props.quantity }, circleParams)
  clearContext()
  circles.forEach(drawCircle)
}

const remapValue = (value, start1, end1, start2, end2) => {
  const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
  return remapped > 0 ? remapped : 0
}

const animate = () => {
  clearContext()
  for (let i = circles.length - 1; i >= 0; i--) {
    const circle = circles[i]
    const closestEdge = Math.min(
      circle.x + circle.translateX - circle.size, // distance from left edge
      canvasSize.w - circle.x - circle.translateX - circle.size, // right edge
      circle.y + circle.translateY - circle.size, // top edge
      canvasSize.h - circle.y - circle.translateY - circle.size // bottom edge
    )
    const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2))
    if (remapClosestEdge > 1) {
      circle.alpha = Math.min(circle.alpha + 0.02, circle.targetAlpha)
    }
    else {
      circle.alpha = circle.targetAlpha * remapClosestEdge
    }
    circle.x += circle.dx
    circle.y += circle.dy
    circle.translateX += ((mouse.x / (props.staticity / circle.magnetism)) - circle.translateX) / props.ease
    circle.translateY += ((mouse.y / (props.staticity / circle.magnetism)) - circle.translateY) / props.ease

    // Recycle particles that drift off-canvas. Iterating backwards keeps the
    // replacement from being skipped, which the previous forEach+splice missed.
    if (
      circle.x < -circle.size
      || circle.x > canvasSize.w + circle.size
      || circle.y < -circle.size
      || circle.y > canvasSize.h + circle.size
    ) {
      circles[i] = circleParams()
    }
    drawCircle(circles[i])
  }
  frameId = window.requestAnimationFrame(animate)
}

const onMouseMove = (event) => {
  if (!canvasRef.value) {
    return
  }
  const rect = canvasRef.value.getBoundingClientRect()
  const { w, h } = canvasSize
  const x = event.clientX - rect.left - w / 2
  const y = event.clientY - rect.top - h / 2
  if (x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2) {
    mouse.x = x
    mouse.y = y
  }
}

watch(() => props.refresh, initCanvas)

onMounted(() => {
  if (!canvasRef.value) {
    return
  }
  context = canvasRef.value.getContext('2d')
  dpr = window.devicePixelRatio || 1
  initCanvas()
  window.addEventListener('resize', initCanvas)
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animate()
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', initCanvas)
  window.removeEventListener('mousemove', onMouseMove)
  if (frameId !== null) {
    window.cancelAnimationFrame(frameId)
  }
})
</script>
