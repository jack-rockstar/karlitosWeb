import InputLabel from '@components/General/InputLabel'
import Modal from '@components/General/Modal'

const marcas = [
  {
    id: '620a6e4eef9893a4544d0ed7',
    name: 'VOLKSWAGEN',
    triunfoBrandIds: [
      'DOD',
      'VW',
      'VWG',
      'VO5'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/volkswagen.png',
    type: 'car',
    popularity: 9
  },
  {
    id: '620a7388ef9893a4544d25ac',
    name: 'RENAULT',
    triunfoBrandIds: [
      'REN',
      'RER',
      'RE2',
      'RES',
      'REK',
      'REL',
      'RCF',
      'RME',
      'RTW',
      'ER9',
      'RE4',
      'EEH',
      'REU'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/renault.png',
    type: 'car',
    popularity: 8
  },
  {
    id: '620a6db1ef9893a4544d0923',
    name: 'CHEVROLET',
    triunfoBrandIds: [
      'CHE',
      'GMC',
      'CHC',
      'CH9',
      '8SV'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/chevrolet.png',
    type: 'car',
    popularity: 7
  },
  {
    id: '620a6f09ef9893a4544d0ef8',
    name: 'FIAT',
    triunfoBrandIds: [
      'FIA',
      'SEA',
      'FIU',
      'FIL',
      'FII',
      'FSH',
      'FI1',
      'G64',
      'FIP',
      'FTB',
      'FI.'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/fiat.png',
    type: 'car',
    popularity: 6
  },
  {
    id: '620a74a0ef9893a4544d2d26',
    name: 'TOYOTA',
    triunfoBrandIds: [
      'TOY',
      'THI',
      'LEX'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/toyota.png',
    type: 'car',
    popularity: 5
  },
  {
    id: '620a6e24ef9893a4544d0c7f',
    name: 'CITROEN',
    triunfoBrandIds: [
      'CIT',
      'IES',
      'CXS',
      'CI4',
      'CTH',
      'CJY'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/citroen.png',
    type: 'car',
    popularity: 4
  },
  {
    id: '620a6f0bef9893a4544d124c',
    name: 'FORD',
    triunfoBrandIds: [
      'FIA',
      'FOR',
      'F_R',
      'FES',
      'FOT',
      'F10',
      'FFI',
      'FRD',
      'FOM',
      'FOX',
      'FFR'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/ford.png',
    type: 'car',
    popularity: 3
  },
  {
    id: '620a72c8ef9893a4544d2282',
    name: 'PEUGEOT',
    triunfoBrandIds: [
      'PEU',
      'PEP',
      '405',
      '306',
      'P2X',
      'P40',
      'PBR',
      'PE8',
      'PUE',
      'PE9'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/peugeot.png',
    type: 'car',
    popularity: 2
  },
  {
    id: '620a7027ef9893a4544d16a1',
    name: 'HONDA',
    triunfoBrandIds: [
      'HON'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/honda.png',
    type: 'car',
    popularity: 1
  },
  {
    id: '620a6c40ef9893a4544d0425',
    name: 'ALEKO',
    triunfoBrandIds: [
      'ALE'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/aleko.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6c5fef9893a4544d042d',
    name: 'ALFA ROMEO',
    triunfoBrandIds: [
      'ALF'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/alfa romeo.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6c63ef9893a4544d04d2',
    name: 'ARO',
    triunfoBrandIds: [
      'ARO',
      'ARF'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/aro.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6c67ef9893a4544d04eb',
    name: 'ASIA',
    triunfoBrandIds: [
      'ASI'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/asia.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6c67ef9893a4544d04ff',
    name: 'ASIA CAMION',
    triunfoBrandIds: [
      'ASI'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/asia camion.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6c67ef9893a4544d0502',
    name: 'AUTOBIANCHI',
    triunfoBrandIds: [
      'AUB',
      'BCI'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/autobianchi.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6cd3ef9893a4544d0505',
    name: 'AUDI',
    triunfoBrandIds: [
      'AUD',
      'AU3',
      'AA4',
      'AS0',
      'AUI',
      'AUF',
      'AU9',
      'AU1',
      '5SG',
      'AU2',
      'AU',
      'AU7',
      'AU8',
      '00G'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/audi.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6cd4ef9893a4544d0712',
    name: 'BMW',
    triunfoBrandIds: [
      'AUD',
      'BMW',
      'BLW',
      'BWM'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/bmw.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6cd5ef9893a4544d0715',
    name: 'AUSTIN',
    triunfoBrandIds: [
      'AUS'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/austin.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6cdcef9893a4544d0738',
    name: 'BELAVTOMAZ',
    triunfoBrandIds: [
      'BEV'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/belavtomaz.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6cdcef9893a4544d073f',
    name: 'BLAC',
    triunfoBrandIds: [
      'BLC'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/blac.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6d33ef9893a4544d0914',
    name: 'CADILLAC',
    triunfoBrandIds: [
      'CAD'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/cadillac.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6db3ef9893a4544d0b9d',
    name: 'CHEVROLET CAM.',
    triunfoBrandIds: [
      'CHE'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/chevrolet cam..png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6db3ef9893a4544d0bae',
    name: 'CHERY',
    triunfoBrandIds: [
      'CHE',
      'CHY',
      'CTI'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/chery.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6db5ef9893a4544d0bb1',
    name: 'CHANGAN',
    triunfoBrandIds: [
      'CHN'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/changan.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6db5ef9893a4544d0bbd',
    name: 'NAKAI (CHANGAN)',
    triunfoBrandIds: [
      'CHN',
      'NAK'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/nakai (changan).png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6dd8ef9893a4544d0bc0',
    name: 'CHRYSLER',
    triunfoBrandIds: [
      'CHR',
      'DOD',
      'IKA',
      'JEE',
      'VAL',
      'CHJ',
      'CL9'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/chrysler.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6e27ef9893a4544d0df6',
    name: 'DACIA',
    triunfoBrandIds: [
      'DAC'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/dacia.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6e2aef9893a4544d0e1b',
    name: 'DEUTZ AGRALE',
    triunfoBrandIds: [
      'DAG'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/deutz agrale.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6e33ef9893a4544d0e21',
    name: 'DAIHATSU',
    triunfoBrandIds: [
      'DAI'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/daihatsu.png',
    type: 'car',
    popularity: 0
  },
  {
    id: '620a6e33ef9893a4544d0e58',
    name: 'DAIHATSU CAMION',
    triunfoBrandIds: [
      'DAI'
    ],
    logo: 'https://anguard-car-brand-logos.s3.sa-east-1.amazonaws.com/daihatsu camion.png',
    type: 'car',
    popularity: 0
  }
]
const anios =
  [
    { id: 1990, name: 1990 },
    { id: 1991, name: 1991 },
    { id: 1992, name: 1992 },
    { id: 1993, name: 1993 },
    { id: 1994, name: 1994 },
    { id: 1995, name: 1995 },
    { id: 1996, name: 1996 },
    { id: 1997, name: 1997 },
    { id: 1998, name: 1998 },
    { id: 1999, name: 1999 },
    { id: 2000, name: 2000 },
    { id: 2001, name: 2001 },
    { id: 2002, name: 2002 },
    { id: 2003, name: 2003 },
    { id: 2004, name: 2004 },
    { id: 2005, name: 2005 },
    { id: 2006, name: 2006 },
    { id: 2007, name: 2007 },
    { id: 2008, name: 2008 },
    { id: 2009, name: 2009 },
    { id: 2010, name: 2010 },
    { id: 2011, name: 2011 },
    { id: 2012, name: 2012 },
    { id: 2013, name: 2013 },
    { id: 2014, name: 2014 },
    { id: 2015, name: 2015 },
    { id: 2016, name: 2016 },
    { id: 2017, name: 2017 },
    { id: 2018, name: 2018 },
    { id: 2019, name: 2019 },
    { id: 2020, name: 2020 },
    { id: 2021, name: 2021 },
    { id: 2022, name: 2022 },
    { id: 2023, name: 2023 }
  ]

const versiones = [
  {
    id: '620a6fb7ef9893a4544d1346',
    name: 'TERRITORY 1.5T SEL'
  },
  {
    id: '6262f254d89309d0908c4809',
    name: 'TERRITORY 1.5T TITANIUM'
  },
  {
    id: '6483eca2f9df930ae8783cfd',
    name: 'TERRITORY 1.8L GAS AT TIT'
  },
  {
    id: '64f2aabf1e9e4f2c42465adb',
    name: 'TERRITORY 1.8T SEL'
  },
  {
    id: '620a6fb7ef9893a4544d1535',
    name: 'RANGER 2.5 SC 4X2 L/19 XL'
  },
  {
    id: '620a77a8ef9893a4544d3da1',
    name: 'RANGER 3.2 TDI DC 4X2 L/19 XLT AT'
  },
  {
    id: '620a77a8ef9893a4544d3da2',
    name: 'RANGER 3.2 TDI DC 4X2 L/19 XLT'
  },
  {
    id: '620a77a8ef9893a4544d3da3',
    name: 'RANGER 3.2 TDI DC 4X2 L/19 XLS'
  },
  {
    id: '620a77a8ef9893a4544d3da9',
    name: 'RANGER 2.5 DC 4X2 L/19 XL'
  },
  {
    id: '620a77a8ef9893a4544d3daa',
    name: 'RANGER 2.5 DC 4X2 L/19 XLT'
  },
  {
    id: '620a77a8ef9893a4544d3dac',
    name: 'RANGER 2.2 TDI DC 4X2 L/19 XLT AT'
  },
  {
    id: '620a77a8ef9893a4544d3dae',
    name: 'RANGER 2.2 TDI DC 4X2 L/19 XL'
  },
  {
    id: '620a77a8ef9893a4544d3daf',
    name: 'RANGER 2.0 TDI DC 4X4 L/19 RAPTOR'
  },
  {
    id: '620a77a8ef9893a4544d3db1',
    name: 'RANGER 2.2 TDI DC 4X4 L/19 XL'
  },
  {
    id: '620a77a8ef9893a4544d3db3',
    name: 'RANGER 2.2 TDI SC 4X4 L/19 XL'
  },
  {
    id: '620a77a8ef9893a4544d3db4',
    name: 'RANGER 3.2 TDI DC 4X4 L/19 LTD AT'
  },
  {
    id: '620a77a8ef9893a4544d3db7',
    name: 'RANGER 3.2 TDI DC 4X4 L/19 XLT AT'
  },
  {
    id: '620a77a8ef9893a4544d3db9',
    name: 'RANGER 3.2 TDI DC 4X4 L/19 XLT'
  },
  {
    id: '620a77a8ef9893a4544d3dba',
    name: 'RANGER 3.2 TDI DC 4X4 L/19 XLS'
  },
  {
    id: '620a77a8ef9893a4544d3dbc',
    name: 'RANGER 2.2 TDI SC 4X2 L/19 XL'
  },
  {
    id: '63fd10e1e47a7f7e5a909fa0',
    name: 'RANGER 3.2 TDI DC 4X4 L/19 FX4 AT'
  },
  {
    id: '6483fa4bf9df931ef3783cfe',
    name: 'RANGER RAPTOR 3.0 T DC 4X4 AUT L/23'
  },
  {
    id: '64e97eed1e9e4f0baf465aca',
    name: 'RANGER 3.0 TDI DC 4X4 L/23 XLS V6 10AT'
  },
  {
    id: '64fbf36940dd7010e0bf9461',
    name: 'RANGER 3.0 TDI DC 4X4 L23LTD10AT'
  },
  {
    id: '64fbf36940dd703656bf945e',
    name: 'RANGER 2.0 TDI DC 4X4 L/23 XL 6MT'
  },
  {
    id: '64fbf36940dd706130bf9460',
    name: 'RANGER 2.0 TDI DC  4X4 L23LTD10AT'
  },
  {
    id: '64fbf36940dd707260bf9462',
    name: 'RANGER 2.0 TDI DC 4X2 L/23XL 6MT'
  },
  {
    id: '64fbf36940dd707eb4bf9464',
    name: 'RANGER 2.0 TDI DC 4X2 L23XLT10AT'
  },
  {
    id: '64fbf36940dd70a181bf945f',
    name: 'RANGER 2.0 TDI DC  4X4 L23XLT10AT'
  },
  {
    id: '64fbf36940dd70e2acbf9463',
    name: 'RANGER 2.0 TDI DC 4X2 L23 XLS6MT'
  },
  {
    id: '620a6fb6ef9893a4544d12af',
    name: 'BRONCO 2.0T SPORT WILDTRAK'
  },
  {
    id: '620a6fb7ef9893a4544d1450',
    name: 'BRONCO 1.5T SPORT BIG BEND'
  },
  {
    id: '620a6fb6ef9893a4544d12bd',
    name: 'F-150 5.0 LARIAT LUXURY AUT 4X4'
  },
  {
    id: '6262d7ac39429b466436c345',
    name: 'F-150 3.5 4X4 AT RAP L21'
  },
  {
    id: '620a6fb7ef9893a4544d13e2',
    name: 'ECO SPORT 1.5 SE              L/18'
  },
  {
    id: '620a6fb7ef9893a4544d1540',
    name: 'ECO SPORT 1.5 TITANIUM        L/18'
  },
  {
    id: '620a6fb7ef9893a4544d1541',
    name: 'ECO SPORT 1.5 TITANIUM AUT    L/18'
  },
  {
    id: '63f985ab80eb874463fd0255',
    name: '2.2 TDI FURGON MED L22 TE'
  },
  {
    id: '63f985ab80eb875e9afd0252',
    name: '2.2 TDI CHASIS L/22'
  },
  {
    id: '63f985ab80eb8787a4fd0253',
    name: '2.2 TDI FURGON LAR L22 TE'
  },
  {
    id: '63f985ab80eb8792adfd0254',
    name: '2.2 TDI FURGON MEDIO L/22'
  },
  {
    id: '63f985ab80eb87c8a2fd0256',
    name: '2.2 TDI MINIBUS L/22'
  },
  {
    id: '649661ac97ffd98097133e74',
    name: 'TRANSIT 2.0 TDI MINIBUS 17+1 L/23'
  },
  {
    id: '64f2aabf1e9e4fb498465ada',
    name: 'TRANSIT 2.0TDI M17+1 23AU'
  },
  {
    id: '620a6fb7ef9893a4544d13b1',
    name: 'KUGA 2.5 HIBRIDA 4X4 TITANIUM AUT'
  },
  {
    id: '620a6fb7ef9893a4544d153e',
    name: 'MUSTANG 5.0 V8 COUPE MACH 1'
  },
  {
    id: '620a6fb7ef9893a4544d153f',
    name: 'MUSTANG 5.0 V8 COUPE GT       L/19'
  },
  {
    id: '646686e51f32d1087dd8d3d2',
    name: 'MAVERICK 2.0T 4WD LARIAT AT8'
  },
  {
    id: '646686e51f32d1f167d8d3d1',
    name: 'MAVERICK 2.0T 2WD XLT AT8'
  }
]

const renderByType = [
  {
    type: 'marca',
    next: 'anio',
    title: 'Otras marcas',
    data: marcas
  },
  {
    type: 'anio',
    next: 'modeloVersion',
    title: 'Elegí el año de fabricación de tu vehículo',
    data: anios
  },
  {
    type: 'modeloVersion',
    next: null,
    title: 'Elegí el modelo de tu vehículo',
    data: versiones
  }
]

export default function ModalVehiculo({ closeModal, isOpen, formType, onFormChange, onFormData }) {
  const form = renderByType.find(e => e.type === formType)

  const handleSelect = (type, nextType, data) => {
    onFormData((prevData) => ({
      ...prevData,
      [type]: data.name
    }))

    if (nextType) {
      onFormChange(nextType)
      return
    }
    closeModal()
  }
  return (
    <Modal closeModal={closeModal} isOpen={isOpen}>
      <main className='relative my-10'>
        <div className='py-2 mx-2 '>
          <InputLabel name='buscar' label='Buscar' placeholder='' />
        </div>
        <div className='overflow-auto custom-scrollbar-orange max-h-[60vh]'>
          <h3 className='block py-4 mx-2 text-base font-semibold text-blue-500'>{form.title}</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-2 ] '>
            {
             form.data.map((e) =>
               <article key={e.id} onClick={() => handleSelect(form.type, form.next, e)} className='px-8 py-4 transition-all border-2 rounded-lg cursor-pointer hover:border-blue-300'>
                 <p className='text-sm font-light text-center text-black'>{e.name}</p>
               </article>
             )
            }
          </div>
        </div>

      </main>

    </Modal>
  )
}
