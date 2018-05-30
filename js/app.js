// creation of a basic timeline for animations
var basicTimeline = anime.timeline({
      // direction: "alternate",
      loop: 1,
      autoplay: false
      });
      // make the logo visible
      basicTimeline.add({
        targets: '#path4591',
        opacity: 1,
        duration: 2500,
        delay: 250,
        fill: '#fdcd5b',
        easing: 'linear'
      })
      .add({
        targets: ['#svg901 #layer1 #synapse #g4919 path', '#svg901 #layer1 #Y2018 path'],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        offset: 200,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false
   })
   .add({
     targets: ['#science', '#industry', '#AI', '#Bitcoin','#MStudent'],
     opacity: 1,
     easing: 'easeInOutSine',
     duration: 3500,
     offset: 500,
     delay: function(el, i) { return i * 250 },
     direction: 'alternate',
     loop: false
})

//Trigger animation
window.onload = basicTimeline.restart;
