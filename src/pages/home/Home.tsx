import VideoBackground from "./elements/videoBackground/VideoBackground"
import Accordion from "../../components/accordion/Accordion"
import VennityMap from "../../components/vennityMap/VennityMap"
import PartnerContainer from "./elements/partnerContainer/PartnerContainer"

export default function Home() {
    return (
        <>
        <div className="w-full bg-primaryBackground">

            {/* video bacground */}
            <div>
                <VideoBackground videoId='jfKfPfyJRdk'/>
            </div>

            <div>
                <img
                    className="w-full" 
                    src="/images/learn-build-create-network-banner.png" 
                    alt="learn build create network banner"
                />
            </div>

            {/* vennity event map embed */}
            <div className="bg-grid_bg_navy w-full h-full">
                <div className="p-10 py-20">
                    <VennityMap />
                </div>
            </div>


            {/* FAQ section */}
            <div className="p-10">
                <h1 className="font-mono font-bold text-4xl text-primaryType mb-4">FAQ</h1> 

                <div className="flex flex-col justify-evenly space-y-4 items-center">
                    <Accordion label="WHAT IS ETHCHICAGO?">
                        <p>
                            ETHChicago is a community-run hackathon and conference focused on decentralized technology, particularly within the Ethereum ecosystem. Our aim is to catalyze innovation, foster collaboration, and promote education through real-world impact in blockchain technology.
                        </p>
                    </Accordion>
                    <Accordion label="WHEN AND WHERE WILL ETHCHICAGO TAKE PLACE?">
                        <p>
                            ETHChicago will take place September 15-17th 2023 in Chicago, Illinois at The Metropolitan Club inside the Willis Tower.
                        </p>
                    </Accordion>
                    <Accordion label="WHO CAN ATTEND ETHCHICAGO?">
                        <p>
                            Anyone interested in decentralized technology is welcome, including developers, creatives, business leaders, students, and enthusiasts from all walks of life. Our community is diverse, inclusive, and open to all.
                        </p>
                    </Accordion>
                    <Accordion label="HOW CAN I PARTICIPATE IN ETHCHICAGO?">
                        <p>
                            There are several ways you can participate in ETHChicago: as a volunteer, partner, speaker, mentor, or attendee. Our website is a great starting point but also feel free to checkout forum.ethchicago.xyz or contact us directly on 
                            {' '}<a href="https://twitter.com/0xEthChicago" className="hover:underline text-primaryBrand">Twitter</a>
                            {' '}&{' '}
                            <a href="mailto:ecosystem@ethchicago.xyz" className="hover:underline text-primaryBrand">ecosystem@ethchicago.xyz</a>
                        </p>
                    </Accordion>
                    <Accordion label="WILL THERE BE BOUNTIES?">
                        <p>
                            Yes, there will be bounties for hackathon participants. Details will be announced closer to the event.
                        </p>
                    </Accordion>
                </div>
            </div>

            {/* Partners sections */}
            <div className="p-10">
                <h1 className="font-mono font-bold text-4xl text-primaryType mb-4">OUR PARTNERS</h1> 
                <PartnerContainer />
            </div>
            
        </div>
        </>
    )
}