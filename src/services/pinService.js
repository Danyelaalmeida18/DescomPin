
import foto1 from '../asserts/foto1.png';
import foto2 from '../asserts/foto2.png';
import foto3 from '../asserts/foto3.png';
import foto4 from '../asserts/foto4.png';
import foto5 from '../asserts/foto5.png';
import foto6 from '../asserts/foto6.png';


const generateId = () => {
    return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${(Math.floor(Math.random() * 100_000)).toString(16)}`
  };
  
  const saveFolders = async (folders) => {
    localStorage.setItem('folders', JSON.stringify(folders));
  };
  
  export const getFolders = async () => {
    return JSON.parse(localStorage.getItem('folders')) || []
  }
  
  export const saveFolder = async (folderName) => {

    const folders = await getFolders();
  
    const newFolder = {
      id: generateId(),
      name: folderName,
      pins: []
    };
  
    folders.push(newFolder);
  
    await saveFolders(folders);
  
    return newFolder;
  }
  
  export const savePinInFolder = async (folderId, pinId) => {
 
  
    const folders = await getFolders();
  
    const folderIndex = folders.findIndex(function(folder) {
      return folder.id === folderId;
    });
  
    if (folderIndex !== -1) {
      folders[folderIndex].pins.push(pinId);
    }
  
    await saveFolders(folders);
  
    return { ...folders[folderIndex] };
  }
  
  export const getPins = async () => {
    return [
      {
        id: '131',
        title: 'Fachada Residencial',
        image: foto1,
        total: 0
      },
      {
        id: '132',
        title: 'Empreendimento Design ',
        image: foto2,
        total: 0
      },
      {
        id: '133',
        title: 'Empreendimento Technology',
        image: foto3,
        total: 0
      },
      {
        id: '134',
        title: 'Arquitetura Interna',
        image: foto4,
        total: 0
      },
      {
        id: '135',
        title: 'Empreendimento misto',
        image: foto5,
        total: 0
      },
      {
        id: '136',
        title: 'Fachada Residencial',
        image: foto6,
        total: 0
      }
    ]
  }