import * as React from 'react'

const VuejsIcon = React.memo(
  ({ width = 32, height = 32, ...rest }: React.SVGProps<SVGSVGElement>) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6 3.22-5.6Z'
        style={{
          fill: '#41b883'
        }}
      />
      <path
        d='m2 3.925 14 24.15 14-24.15h-5.6L16 18.415 7.53 3.925Z'
        style={{
          fill: '#41b883'
        }}
      />
      <path
        d='M7.53 3.925 16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z'
        style={{
          fill: '#35495e'
        }}
      />
    </svg>
  )
)

export default VuejsIcon
