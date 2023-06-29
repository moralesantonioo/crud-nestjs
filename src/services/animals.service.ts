import { Injectable } from '@nestjs/common';
import { Animals } from 'src/interfacez/animals.interface';

@Injectable()
export class AnimalsService {
    private animals: Animals[] = [
        { id: 1, name: 'Perro', species: 'Canino' },
        { id: 2, name: 'Gato', species: 'Felino' },
        { id: 3, name: 'León', species: 'Felino' },
    ];

    get(): Animals[] {
        return this.animals;
    }

    post(animal: Animals): string {
        const nextId = this.animals.length + 1;
        this.animals.push({ id: nextId, ...animal });
        return 'Registro exitoso';
    }

    update(updatedAnimal: Animals): string {
        const index = this.animals.findIndex(animal => animal.id === updatedAnimal.id);
        if (index !== -1) {   
            this.animals[index] = {...updatedAnimal };
            return 'Actualización exitosa';
        }
        return 'Item no encontrado';
    }


    delete(id: number): string {
        const index = this.animals.findIndex(animal => animal.id === Number(id));
        if (index !== -1) {
            this.animals.splice(index, 1);
            return 'Registro eliminado';
        }
        return 'Error al eliminar el item';
    }
}
