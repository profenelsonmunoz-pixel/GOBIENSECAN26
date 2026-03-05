import React from 'react';
import { User, Users, Award, ShieldCheck } from '../constants';

interface SupportMember {
  name: string;
  grade: string;
}

interface Candidate {
  id: string;
  number: string;
  name: string;
  role: 'Personería' | 'Contraloría';
  grade?: string; // Grade of the candidate if available
  photoUrl?: string; // Placeholder for now
  supportGroup: SupportMember[];
}

const candidatesData: Candidate[] = [
  // Personería
  {
    id: 'p1',
    number: '01',
    name: 'VALERY VANEGAS VELANDIA',
    role: 'Personería',
    grade: '11-1',
    supportGroup: [
      { name: 'MARIA DEL CARMEN VERGARA ARANGO', grade: '11-1' }
    ]
  },
  {
    id: 'p2',
    number: '02',
    name: 'MELANY DÍAZ YULE',
    role: 'Personería',
    grade: '11-2',
    supportGroup: [
      { name: 'ISABELA BUSTOS', grade: '11-2' }
    ]
  },
  {
    id: 'p3',
    number: '03',
    name: 'PAULA ANDREA LUANGO',
    role: 'Personería',
    grade: '11-3',
    supportGroup: [
      { name: 'KAREN SARAY GONZALEZ', grade: '11-3' },
      { name: 'ANA SOFIA MARTINEZ CANDELO', grade: '11-3' },
      { name: 'MARIANA MUÑOZ VASQUEZ', grade: '11-3' },
      { name: 'STEPHANIA CÓRDOBA VIAFARA', grade: '11-3' },
      { name: 'YURLEY NATALIA CALAMBAS ENRIQUEZ', grade: '11-3' }
    ]
  },
  {
    id: 'p4',
    number: '04',
    name: 'JHON STEBAN SANCHEZ',
    role: 'Personería',
    grade: '11-5',
    supportGroup: [
      { name: 'SARAY DUARTE NARVÁEZ', grade: '11-5' }
    ]
  },
  // Contraloría
  {
    id: 'c1',
    number: '05',
    name: 'SARA ISABELA CHOCO ARRECHEA',
    role: 'Contraloría',
    grade: '10-2',
    supportGroup: [
      { name: 'JUAN SEBASTIAN OREJUELA VALLEJO', grade: '10-2' },
      { name: 'EVELYN DAHIANA BOTINA RECALDE', grade: '10-2' },
      { name: 'HASSBLEIDY TATIANA ÁVILA MIRANDA', grade: '10-2' },
      { name: 'EYLEEN GABRIELA HERNANDEZ', grade: '10-2' },
      { name: 'DANNA ISABELLA HURTADO CUESTA', grade: '10-2' }
    ]
  },
  {
    id: 'c2',
    number: '06',
    name: 'BRAYAN DAVID DÍAZ SINISTERRA',
    role: 'Contraloría',
    grade: '10-4',
    supportGroup: [
      { name: 'NICOL DANIELA ESCOBAR LÓPEZ', grade: '10-4' },
      { name: 'JUAN JOSÉ GUE ARANGO', grade: '10-4' },
      { name: 'ISABELA VALENCIA CAMPAZ', grade: '10-4' },
      { name: 'JHON ESNEIDER ASPRILLA VENTÉ', grade: '10-4' },
      { name: 'XILENA YIRETH CAMILO', grade: '10-4' }
    ]
  },
  {
    id: 'c3',
    number: '07',
    name: 'VALENTINA CARO RODRIGUEZ',
    role: 'Contraloría',
    grade: '10-1',
    supportGroup: [
      { name: 'MAILY DANIELA LIBREROS RESTREPO', grade: '10-1' },
      { name: 'KAROL NIKOL GUERRERO FERNANDEZ', grade: '10-1' },
      { name: 'MARIA JOSÉ MOLINA CORREA', grade: '10-1' }
    ]
  },
  {
    id: 'c4',
    number: '08',
    name: 'JUAN MANUEL GALINDEZ RUÍZ',
    role: 'Contraloría',
    grade: '10-3',
    supportGroup: [
      { name: 'BRANDON OSPINA CIFUENTES', grade: '10-3' },
      { name: 'MEYLI DAHIANA HIGUITA MOSQUERA', grade: '10-3' },
      { name: 'HELLEN NAIROBY PÉREZ ORTEGA', grade: '10-3' },
      { name: 'JUNIOR HERNAN DORADO', grade: '10-3' }
    ]
  },
  {
    id: 'c5',
    number: '09',
    name: 'LEIDY DAYANNA MARTINEZ RIVAS',
    role: 'Contraloría',
    grade: '10-6',
    supportGroup: [
      { name: 'MARYURI DAYANA ORDOÑEZ MUÑOZ', grade: '10-6' },
      { name: 'JUAN DAVID DÍAZ HURTADO', grade: '10-6' },
      { name: 'SARAY CABEZAS CUENCA', grade: '10-6' },
      { name: 'HASLYN SARAY CARABALÍ VIÁFARA', grade: '10-6' },
      { name: 'NICOL TATIANA MOSQUERA', grade: '10-6' }
    ]
  }
];

const CandidatesList: React.FC = () => {
  const personeros = candidatesData.filter(c => c.role === 'Personería');
  const contralores = candidatesData.filter(c => c.role === 'Contraloría');

  const CandidateCard = ({ candidate }: { candidate: Candidate }) => {
    const photoUrl = window.CANDIDATE_IMAGES?.[candidate.number];
    const hasPhoto = photoUrl && photoUrl.trim() !== '';

    return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 hover:border-[#F59E0B] transition-all group flex flex-col h-full">
      {/* Header with Number */}
      <div className={`p-6 text-white text-center relative overflow-hidden ${candidate.role === 'Personería' ? 'bg-[#1E3A8A]' : 'bg-[#F59E0B]'}`}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           {/* Pattern or texture could go here */}
        </div>
        <span className={`inline-block text-4xl font-black px-6 py-2 rounded-2xl shadow-lg border-2 border-white/20 ${candidate.role === 'Personería' ? 'bg-[#F59E0B] text-[#1E3A8A]' : 'bg-[#1E3A8A] text-white'}`}>
          #{candidate.number}
        </span>
        <h3 className={`mt-4 text-xl font-black uppercase tracking-tight leading-tight ${candidate.role === 'Contraloría' ? 'text-[#1E3A8A]' : ''}`}>
          {candidate.name}
        </h3>
        {candidate.grade && (
          <span className={`inline-block mt-2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${candidate.role === 'Personería' ? 'bg-white/10' : 'bg-black/10'}`}>
            Grado {candidate.grade}
          </span>
        )}
      </div>

      {/* Photo Placeholder or Image */}
      <div className="aspect-[4/5] bg-slate-100 relative group-hover:bg-slate-200 transition-colors flex items-center justify-center border-b border-slate-100 overflow-hidden">
        {hasPhoto ? (
          <img 
            src={photoUrl} 
            alt={`Foto de ${candidate.name}`} 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder on error
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        
        <div className={`text-center p-6 ${hasPhoto ? 'hidden' : ''}`}>
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-inner mb-4">
            <User size={40} className="text-slate-300" />
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Espacio para Foto
          </p>
        </div>
      </div>

      {/* Support Group */}
      <div className="p-8 flex-1 bg-slate-50/50">
        <div className="flex items-center gap-2 mb-4">
          <Users size={18} className={candidate.role === 'Personería' ? 'text-[#1E3A8A]' : 'text-[#F59E0B]'} />
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-500">Grupo de Apoyo</h4>
        </div>
        <ul className="space-y-3">
          {candidate.supportGroup.map((member, idx) => (
            <li key={idx} className="text-sm font-medium text-slate-600 flex justify-between items-start border-b border-slate-100 pb-2 last:border-0">
              <span className="uppercase text-[11px] leading-tight">{member.name}</span>
              <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-100 ml-2 shrink-0">
                {member.grade}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

  return (
    <div className="space-y-20 animate-in slide-in-from-bottom-8 duration-700">
      
      {/* Introduction */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-xl mb-4">
          <Award size={40} className="text-[#F59E0B]" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#1E3A8A] uppercase tracking-tighter">
          Candidatos Oficiales
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
          Conoce a los líderes estudiantiles que buscan representar tu voz en el Gobierno Escolar 2026.
        </p>
      </div>

      {/* Personería Section */}
      <section className="space-y-10">
        <div className="flex items-center gap-4 border-b-[4px] border-[#1E3A8A] pb-4">
          <div className="bg-[#1E3A8A] p-3 rounded-xl text-white">
            <User size={32} />
          </div>
          <div>
            <h3 className="text-3xl font-black text-[#1E3A8A] uppercase tracking-tight">Personería</h3>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Candidatos de Grado 11°</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personeros.map(c => <CandidateCard key={c.id} candidate={c} />)}
        </div>
      </section>

      {/* Contraloría Section */}
      <section className="space-y-10">
        <div className="flex items-center gap-4 border-b-[4px] border-[#F59E0B] pb-4">
          <div className="bg-[#F59E0B] p-3 rounded-xl text-[#1E3A8A]">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h3 className="text-3xl font-black text-[#1E3A8A] uppercase tracking-tight">Contraloría</h3>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Candidatos de Grado 10°</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {contralores.map(c => <CandidateCard key={c.id} candidate={c} />)}
        </div>
      </section>

    </div>
  );
};

export default CandidatesList;
