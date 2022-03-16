<template>
  <section
    class="roadmap section"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color'
    ]"
  >
    <div class="container">
      <div
        class="roadmap-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider'
        ]"
      >
        <c-section-header :data="sectionHeader" class="center-content" />
        <c-timeline>
          <c-timeline-item title="Dec 2020 - Present">
            🏛️ Cadre De Vie - Data provider startup
          </c-timeline-item>
          <c-timeline-item title="Mar 2020 - Jul 2020">
            🎟️ Taktyl - Mobile App for events
          </c-timeline-item>
          <c-timeline-item title="Jan 2020 - Dec 2020">
            🧑🏼‍⚕️ HomePlus - HeathCare Services
          </c-timeline-item>
          <c-timeline-item title="Jan 2019 - Jan 2020">
            🎤 Olympe - Voice drived interface
          </c-timeline-item>
          <c-timeline-item title="Sep 2018 - Jan 2020">
            ⚓ Ci5 - Cargo Intelligent System
          </c-timeline-item>
          <c-timeline-item title="Aug 2018">
            👑 Graduated Telecom Engineer from ENSEIRB-MATMECA
          </c-timeline-item>
          <c-timeline-item title="Jan 2018 - Aug 2018">
            ⚔️ SICS - Battle Management System (internship)
          </c-timeline-item>
        </c-timeline>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CTimeline from '@/components/elements/Timeline.vue'
import CTimelineItem from '@/components/elements/TimelineItem.vue'

export default {
  name: 'CRoadmap',
  components: {
    CSectionHeader,
    CTimeline,
    CTimelineItem
  },
  mixins: [SectionProps],
  data () {
    return {
      sectionHeader: {
        title: 'Experiences'
      }
    }
  }
}
</script>
