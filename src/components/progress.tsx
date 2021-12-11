import React from 'react'
import tw from 'twin.macro'

const ProgressItem = tw.div`flex flex-col items-center`
const ProgressPoint = tw.div`w-10 h-10 flex items-center justify-center flex-grow-0 rounded-full text-white`
const ProgressText = tw.span`absolute mt-12 text-lg whitespace-nowrap text-primarydeep`
const ProgressNode = tw.div`w-36 h-2 flex-grow-0`

type ProgressProperties = {
  stepLabels: string[],
  currentStep: number
}

const Progress: React.FC<ProgressProperties> = ({ stepLabels, currentStep }) => (
  <div tw="w-full px-48 flex justify-center items-center">
    {
      stepLabels.map((stepLabel, index) => (
        <>
          <ProgressItem>
            <ProgressPoint css={index < currentStep ? tw`bg-secondary` : tw`bg-grey`}>{index + 1}</ProgressPoint>
            <ProgressText css={index === currentStep - 1 && tw`font-semibold`}>{stepLabel}</ProgressText>
          </ProgressItem>
          {
            (index < (stepLabels.length - 1)) &&
            <ProgressNode css={index < currentStep - 1 ? tw`bg-secondary` : tw`bg-grey`} />
          }
        </>
      ))
    }
  </div>
)

export {
  Progress
}
