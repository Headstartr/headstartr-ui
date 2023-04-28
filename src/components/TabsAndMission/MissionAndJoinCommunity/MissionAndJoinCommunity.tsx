import OurMission from './OurMission/OurMission';
import JoinCommunityCta from '@/components/JoinCommunityCta/JoinCommunityCta';

function MissionAndJoinCommunity() {
  return (
    <section className="flex w-full flex-col gap-6 rounded-[20px] pt-6 lg:flex-row">
      <OurMission />
      <div className="flex flex-1 flex-col justify-center rounded-[20px] bg-white p-4 lg:px-12 lg:py-10">
        <JoinCommunityCta />
      </div>
    </section>
  );
}

export default MissionAndJoinCommunity;
