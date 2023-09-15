import InputLabel from '@components/General/InputLabel'
import Modal from '@components/General/Modal'

const vehiculos = [
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

export default function ModalVehiculo({ closeModal, isOpen }) {
  return (
    <Modal closeModal={closeModal} isOpen={isOpen}>
      <main className='relative my-10'>
        <div className='py-2 mx-2 '>
          <InputLabel label='Buscar' placeholder='' />
        </div>
        <div className='overflow-auto custom-scrollbar-orange max-h-[60vh]'>
          <h3 className='block py-4 mx-2 text-base font-semibold text-blue-500'>Otras marcas</h3>
          <div className='grid grid-cols-3 gap-6 px-2 ] '>
            {
          vehiculos.map(e =>
            <article key={e.id} className='px-8 py-4 transition-all border-2 rounded-lg cursor-pointer hover:border-blue-300'>
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
