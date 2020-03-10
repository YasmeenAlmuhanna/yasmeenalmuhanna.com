---
layout: project
title: "Projection</br>Mapping"
date: 2019-02-22
category: Spatial Augmented Reality
thumbnail: projection_mapping.svg
color: DC5656
order: 5
hero: "/img/projectionmapping/hero.png"

---

<div class="project-metadata grid-x">
  <div class="metadata-object cell grid-x">
    <div class="metadata-title cell small-4">
      Project Type
    </div>
    <div class="metadata-value cell auto">
      Spatial Augmented Reality
    </div>
  </div>
</div>

<div class="project-intro">
  <p>In this site-specific installation, a set of cubes where arranged along a corner of the room that acted as the 'canvas' for the projection.</p>
  <p>I designed and coded a choreographed sequence with Processing.</p>
</div>


!~META

<div class="section-header">
    <span class="section-number">01</span>
    <div class="section-name">
        <h2>Project<br/>Considerations</h2>
        <div class="section-line" style="color: #DC5656; background: #DC5656;"></div>
    </div>
</div>

<div class="columns">
    <div class="left-column-text">
        <div class="sub-section-name">
            <h3>Point Value<br/>System</h3>
            <div class="sub-section-line" style="color: #DC5656;"></div>
        </div>
        <p>Each of the regular and irregular faces on the model is  assigned a point value system which is then used within the processing interface.</p>
    </div>
    <div class="right-column-img">
        <div>
            <img src="/img/projectionmapping/onePointValueSystem.jpg" alt="point value system">
        </div>
    </div>
</div>


<p>Unlike smartphones or wearable AR, projected AR experiences are site specific. The source of the projection in relation to the canvas and position of the viewer needs to be accounted for.</p>
<p>How do you project a rectangle on one of the sides of a cube? It would be easy when the projector is exactly in front of the target side.</p>

<img src="/img/projectionmapping/targetView.jpg" alt="point value system" style="width:100%;">
<p class="caption">Point Value System</p>

<p>If the projector is not directly in front of the canvas then we will quickly observe a keystone effect. Simply speaking the image will be distorted.</p>

<img src="/img/projectionmapping/keystone.jpg" alt="point value system" style="width:100%;">
<p class="caption">Keystone Effect</p>

<p>To fix this, the vertices of the projected image are tweaked so that the projected image is distorted to look like the projector "sees" it; as demonstrated in the figure below.</p>

<img src="/img/projectionmapping/overcomingKeystone.jpg" alt="point value system" style="width:100%;">
<p class="caption">Overcoming Keystone</p>

<div class="section-header">
    <span class="section-number">02</span>
    <div class="section-name">
        <h2>Iterative<br/>Projections</h2>
        <div class="section-line" style="color: #DC5656; background: #DC5656;"></div>
    </div>
</div>

<div class="columns">
    <div class="left-column-img">
        <img src="/img/projectionmapping/iteration1.jpg" style="padding-right: 20px">
    </div>
    <div class="right-column-img">
        <img src="/img/projectionmapping/iteration2.jpg" style="padding-left: 20px">
    </div>
</div>

<div class="columns">
    <div class="left-column-img">
        <img src="/img/projectionmapping/iteration3.jpg" style="padding-right: 20px">
    </div>
    <div class="right-column-img">
        <img src="/img/projectionmapping/iteration4.jpg" style="padding-left: 20px">
    </div>
</div>
