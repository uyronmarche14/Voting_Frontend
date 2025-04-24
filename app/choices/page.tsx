import Header from "../components/header";
import CandidateContainer from "../components/choices/CandidateContainer";

export default function index () {
    return <main className="bg-gray-100 pb-10 pt-42 flex flex-col items-center bg-[url(/initial/building.png)] bg-center bg-cover">
         <Header />
         <div className="w-[90%] max-w-[1440px] p-4 flex flex-col gap-6">
            <CandidateContainer 
                title="PRESIDENT"
                selectMultiple={false}
                candidates={[
                    { id: 1, name : "Lindsey Samson1", party: "Wala", picture: '/lindsey.jpg'},
                    { id: 2, name : "Lindsey Samson2", party: "Wala", picture: '/lindsey.jpg'},

                ]}
            />
            <CandidateContainer 
                title="VICE-PRESIDENT"

                selectMultiple={false}
                candidates={[
                    { id: 1, name : "Lindsey Samson1", party: "Wala", picture: '/lindsey.jpg'},
                    { id: 2, name : "Lindsey Samson2", party: "Wala", picture: '/lindsey.jpg'},

                ]}
            
            />
            <CandidateContainer 
                title="SECRETARY"
                selectMultiple={false}
                candidates={[
                    { id: 1, name : "Lindsey Samson1", party: "Wala", picture: '/lindsey.jpg'},
                    { id: 2, name : "Lindsey Samson2", party: "Wala", picture: '/lindsey.jpg'},
                ]}
            
            />
            <CandidateContainer 
                title="AUDITOR"
                selectMultiple={false}
                candidates={[
                    { id: 1, name : "Lindsey Samson1", party: "Wala", picture: '/lindsey.jpg'},
                    { id: 2,name : "Lindsey Samson2", party: "Wala", picture: '/lindsey.jpg'},
                   
                ]}
            />
            <CandidateContainer 
                title="OFFICERS"
                selectMultiple={true}
                candidates={[
                    { id: 1, name : "Lindsey Samson1", party: "Wala", picture: '/lindsey.jpg'},
                    { id: 2,name : "Lindsey Samson2", party: "Wala", picture: '/lindsey.jpg'},
                    { id: 4, name : "Lindsey Samson3", party: "Wala", picture: '/lindsey.jpg'},
                    { id: 5, name : "Lindsey Samson4", party: "Wala", picture: '/lindsey.jpg'}
                ]}
            />
         </div>
    </main>
}