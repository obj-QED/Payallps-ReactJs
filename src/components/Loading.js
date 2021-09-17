import React, { Fragment } from 'react';

export const Loading = ({ width = 16, height = 16, className }) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <g
        className="nc-loop_circle-02-24"
        transform="rotate(307.5042857093338 12 12)"
      >
        <circle
          cx="12"
          cy="12"
          fill="none"
          opacity="0.4"
          r="11"
          stroke="currentColor"
        />
        <path d="M12,1 c6.0751324,0,11,4.9248676,11,11" fill="none" />
      </g>
      <script
        dangerouslySetInnerHTML={{
          __html:
            '!function(){function t(t){this.element=t,this.animationId,this.start=null,this.init()}if(!window.requestAnimationFrame){var i=null;window.requestAnimationFrame=function(t,n){var e=(new Date).getTime();i||(i=e);var a=Math.max(0,16-(e-i)),o=window.setTimeout(function(){t(e+a)},a);return i=e+a,o}}t.prototype.init=function(){var t=this;this.animationId=window.requestAnimationFrame(t.triggerAnimation.bind(t))},t.prototype.reset=function(){var t=this;window.cancelAnimationFrame(t.animationId)},t.prototype.triggerAnimation=function(t){var i=this;this.start||(this.start=t);var n=t-this.start;504&gt;n||(this.start=this.start+504),this.element.setAttribute("transform","rotate("+Math.min(n/1.4,360)+" 12 12)");if(document.documentElement.contains(this.element))window.requestAnimationFrame(i.triggerAnimation.bind(i))};var n=document.getElementsByClassName("nc-loop_circle-02-24"),e=[];if(n)for(var a=0;n.length&gt;a;a++)!function(i){e.push(new t(n[i]))}(a);document.addEventListener("visibilitychange",function(){"hidden"==document.visibilityState?e.forEach(function(t){t.reset()}):e.forEach(function(t){t.init()})})}();',
        }}
      />
    </g>
  </svg>
);

export const LoadingSwitch = ({ children, loading, animationProps }) => (
  <Fragment>{loading ? <Loading {...animationProps} /> : children}</Fragment>
);
