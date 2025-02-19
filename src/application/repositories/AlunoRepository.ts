import { IAlunoRepository } from '../../domain/repositories/IAlunoRepository';
import { Aluno } from '@prisma/client';
import { prisma } from '../../infra/database/prismaClient';
import { ICreateAlunoUserDTO, IUpdateAlunoUserDTO } from '../DTOs/alunoDTO';

class AlunoRepository implements IAlunoRepository {
	private prisma: typeof prisma.aluno;

	constructor() {
		this.prisma = prisma.aluno;
	}

	async create({
		nome,
		email,
		cpf,
		sexo,
		telefone,
		id_turma,
		id_curso,
		password,
	}: ICreateAlunoUserDTO): Promise<Aluno> {
		return await this.prisma.create({
			data: {
				nome: nome,
				email: email,
				cpf: cpf,
				sexo: sexo,
				telefone: telefone,

				turma: {
					connect: {
						id: id_turma,
					},
				},

				curso: {
					connect: {
						id: id_curso,
					},
				},

				User: {
					create: {
						email: email,
						password: password,
						status: 'aluno',
					},
				},
			},
		});
	}
	async findBy(data: Partial<Aluno>, include?: any): Promise<Aluno> {
		return await this.prisma.findFirst({
			where: {
				...data,
			},
			include,
		});
	}

	async findByMany(data: Partial<Aluno>, include?: any): Promise<Aluno[]> {
		return await this.prisma.findMany({
			where: {
				...data,
			},
			include,
		});
	}

	async delete(id: string): Promise<void> {
		await this.prisma.delete({
			where: { id },
		});
		return;
	}

	async findAll(): Promise<Aluno[]> {
		return await this.prisma.findMany();
	}

	async update({
		id,
		email,
		updateAluno,
		updateUser,
	}: IUpdateAlunoUserDTO): Promise<Aluno> {
		await this.prisma.update({
			where: {
				id,
			},
			data: {
				...updateAluno,
				User: {
					update: {
						where: {
							email,
						},
						data: {
							...updateUser,
						},
					},
				},
			},
		});
		return await this.findBy({ id: id });
	}
}
export default AlunoRepository;
