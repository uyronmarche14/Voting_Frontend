"use client"

import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { red } from '@mui/material/colors';
import { SetStateAction, useEffect, useState } from 'react';
import { Avatar, Button } from '@mui/material';
import { cn } from '@/app/lib/utils';

interface ContainerProps {
  title: string;
  selectMultiple: boolean;
  candidates: Candidate[];
}

interface Candidate {
  id: number;
  name: string;
  party: string;
  picture: string;
}

export default function CandidateContainer({
  title,
  selectMultiple,
  candidates,
}: ContainerProps) {
  const [selected, setSelected] = useState<number[]>([]);
  const [value, setValue] = useState<number>();

  const handleSingleSelect = (id: number) => {
    value == id ? setValue(undefined) : setValue(id)
  };

  const handleMultiSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return (
    <div className="w-full flex flex-col bg-white p-6 rounded-xl shadow-md border-1 border-gray-300">
        <div className="w-full py-2 mb-4">
          <h1 className="text-4xl text-gray-600 font-bold">{title}</h1>
        </div>
        <div className='flex gap-3 flex-wrap justify-center'>
        {candidates.map(candidate => {
            return <div 
                key={candidate.id} 
                className={cn('shadow-xl flex flex-col text-center',
                    'items-center cursor-pointer', 
                    'border-1 border-gray-300 p-8 bg-white rounded-md',
                )}
            >
                    <Avatar 
                        sx={{
                            width: '200px',
                            height: '200px'
                        }}
                        src={candidate.picture}
                    />
                    <h1 className='mt-6 text-2xl font-bold'>{candidate.name}</h1>
                    <p className='text-lg'>Party: {candidate.party}</p>
                    <Button 
                        sx={{ 
                            marginTop: '20px', 
                            bgcolor: (selectMultiple 
                            ? selected.includes(candidate.id) 
                            : value === candidate.id) ? red[500] : undefined 
                        }} 
                        variant='contained'
                        onClick={() => {
                            if (selectMultiple) {
                                handleMultiSelect(candidate.id);
                            } else {
                                handleSingleSelect(candidate.id); 
                            }
                        }}
                        >
                        {(selected.includes(candidate.id) || value === candidate.id) ? 'Selected' : 'Select'}
                        </Button>
            </div>
        })}
        </div>
    </div>
  );
}