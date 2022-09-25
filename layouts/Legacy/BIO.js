import FixedHeightCard from "components/FixedHeightCard";
import React from "react";

function BIO() {
  return (
    <div>
      <div className="container-2">
        <h1 className="fs-56px font-black text-white mb-6">BIO</h1>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-50px mb-16">
          <div className="space-y-5">
            <p className="fs-16px font-medium text-white">
              Brian Shuster is one of the pioneers of the internet, and has
              developed and holds patents to many core internet technologies and
              business methods. He is considered one of the trail-blazers in
              internet content provision, and has been discussed and featured in
              many industry and general news outlets, including: MSNBC.com,
              Business 2.0, Yahoo, Wired News, and many others.
            </p>
            <p className="fs-16px font-medium text-white">
              Brian Shuster founded his first internet company, World Wide
              Internet Network, in 1995. WWIN developed and deployed the first
              commercial advertising network on the internet, and pioneered the
              use of banner advertising and banner advertising exchange systems.
            </p>
          </div>
          <div className="space-y-5">
            <p className="fs-16px font-medium text-white">
              WWIN was involved in establishing some of the very first price
              points and value propositions for internet advertising sales.
            </p>
            <p className="fs-16px font-medium text-white">
              Many of the technologies developed by Mr. Shuster are now widely
              used across the spectrum of almost all other internet companies.
            </p>
            <p className="fs-16px font-medium text-white">
              Mr. Shuster has more than 100 patents and pending patents in
              technology areas such core internet technologies - ranging from
              internet operations to advanced and widely deployed advertising
              modalities.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-50px">
          <FixedHeightCard title="Foster the Best of Human Nature 16 major international franchisees">
            <div className="space-y-1">
              <p className="fs-16px font-medium">United States</p>
              <p className="fs-16px font-medium">Russia</p>
              <p className="fs-16px font-medium">Columbia</p>
              <p className="fs-16px font-medium">Germany</p>
              <p className="fs-16px font-medium">Spain</p>
              <p className="fs-16px font-medium">Chile</p>
              <p className="fs-16px font-medium">Brazil</p>
              <p className="fs-16px font-medium">Poland</p>
              <p className="fs-16px font-medium">Argentina</p>
              <p className="fs-16px font-medium">Mexico</p>
              <p className="fs-16px font-medium">Turkey</p>
              <p className="fs-16px font-medium">Uruguay</p>
              <p className="fs-16px font-medium">Italy</p>
              <p className="fs-16px font-medium">Venezuela</p>
              <p className="fs-16px font-medium">Peru</p>
              <p className="fs-16px font-medium">Hungary</p>
            </div>
          </FixedHeightCard>
          <FixedHeightCard title="Foster the Best of Human Nature">
            <div>
              <p className="fs-16px font-medium mb-6">
                Utherverse understands the need to give back to the communities
                that we all share. That’s why Utherverse Donates was created,
                having raised over $138,842 USD by members of the virtual world,
                in multiple Virtual Events supporting charities such as:
              </p>

              <ul className="space-y-1">
                <li className="fs-16px font-medium">
                  Aaron Diamond AIDS Research Center
                </li>
                <li className="fs-16px font-medium">American Cancer Society</li>
                <li className="fs-16px font-medium">
                  American Heart Association
                </li>
                <li className="fs-16px font-medium">American Red Cross</li>
                <li className="fs-16px font-medium">
                  Amnesty International USA
                </li>
                <li className="fs-16px font-medium">Autism Speaks Bikers</li>
                <li className="fs-16px font-medium">Against Child Abuse</li>
                <li className="fs-16px font-medium">
                  Breastcancer.org Cancer Research Institute
                </li>
                <li className="fs-16px font-medium">
                  Children’s Hemiplegia and Stroke Association Children’s
                  Hospital of Pittsburgh
                </li>
                <li className="fs-16px font-medium">
                  Children’s Wish Foundation Child’s Play Cybersmile Foundation
                </li>
                <li className="fs-16px font-medium">
                  DAV Charitable Service Trust Doctors Without Borders USA
                  Fallen Heroes Survivors Foundations, Inc.
                </li>
                <li className="fs-16px font-medium">
                  Feed the Children Fisher House Foundation Great Ormond Street
                  Hospital
                </li>
                <li className="fs-16px font-medium">
                  Children’s Charity Impact Festival Society Intrepid Fallen
                  Heroes Fund{" "}
                </li>
                <li className="fs-16px font-medium">
                  Leukemia &amp; Lymphoma Society Living Beyond Breast Cancer
                  Lupus Foundation of America, Inc.
                </li>
                <li className="fs-16px font-medium">
                  Lupus Research Institute Marine Toys for Tots Foundation
                  Muscular Dystrophy Association
                </li>
                <li className="fs-16px font-medium">
                  NAMI Nevada National Fallen Firefighters Foundation National
                  MS Society Numerica Credit
                </li>
                <li className="fs-16px font-medium">
                  Union: Daniel J. Curran Fund Organization for Autism Research
                  Pink Ribbon International
                </li>
                <li className="fs-16px font-medium">
                  Premier’s Disaster Relief Appeal Safe Horizon
                </li>
                <li className="fs-16px font-medium">
                  SALVATION ARMY Sickle Cell Disease Association of America St.
                  Jude Children’s Research Hospital
                </li>
                <li className="fs-16px font-medium">
                  The Cybersmile Foundation USO Villalobos Rescue Center Wounded
                  Warrior Project
                </li>
              </ul>
            </div>
          </FixedHeightCard>
        </div>
      </div>
    </div>
  );
}

export default BIO;
