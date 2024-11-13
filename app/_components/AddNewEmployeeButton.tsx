'use client'
import { ArrowDownUpIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

import { z } from "zod"
import { driversLicenseCategory, employeeCargo, employeeContractStatus, employeeGender, employeeGraduation, employeeMaritalStatus, employeeRelationship, employeeSkinColor } from '@prisma/client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { MoneyInput } from './MoneyInput'

const formSchema = z.object({
    fullName: z.string().min(3, {
        message: 'O nome do funcionário é obrigatório e deve ter no mínimo 3 caracteres',
    }),
    email: z.string().email({
        message: 'O email do funcionário é obrigatório e deve ser um email válido',
    }),
    employeePhoto: z.string().url().optional(),
    tagName: z.string().min(3, {
        message: 'A tag do funcionário é obrigatória e deve ter no mínimo 3 caracteres',
    }),
    tagLastName: z.string().min(3, {
        message: 'O sobrenome do funcionário é obrigatório e deve ter no mínimo 3 caracteres',
    }),
    birthday: z.date({
        message: 'A data de nascimento do funcionário é obrigatória',
    }),
    zipCode: z.string().optional(),
    address: z.string().optional(),
    number: z.string().optional(),
    complement: z.string().optional(),
    neighborhood: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
    phone: z.string().optional(),
    mobile: z.string().optional(),
    naturalness: z.string().optional(),
    nationality: z.string().optional(),
    gender: z.nativeEnum(employeeGender, {
        message: 'O gênero do funcionário é obrigatório',
    }),
    fatherName: z.string().optional(),
    motherName: z.string().optional(),
    maritalStatus: z.nativeEnum(employeeMaritalStatus, {
        message: 'O estado civil do funcionário é obrigatório',
    }),
    graduation: z.nativeEnum(employeeGraduation, {
        message: 'A formação do funcionário é obrigatória',
    }),
    skinColor: z.nativeEnum(employeeSkinColor).optional(),
    partnerName: z.string().optional(),
    partnerCpf: z.string().length(11).optional(),
    partnerBirthday: z.date().optional(),
    partnerRG: z.string().optional(),
    transport: z.boolean({
        message: 'O campo transporte é obrigatório',
    }),
    transportValue: z.number().optional(),
    contactName: z.string().min(3).optional(),
    contactPhone: z.string().optional(),
    contactEmail: z.string().email().optional(),
    employeeRelationship: z.nativeEnum(employeeRelationship).optional(),
    dependentName: z.string().min(3).optional(),
    dependentBirthday: z.date().optional(),
    dependentCPF: z.string().length(11).optional(),
    employeeRelationshipDependent: z.nativeEnum(employeeRelationship).optional(),
    rg: z.string().optional(),
    rgEmitter: z.string().optional(),
    rgEmissionDate: z.date().optional(),
    cpf: z.string().length(11).optional(),
    PIS: z.string().optional(),
    voterTitle: z.string().optional(),
    voterZone: z.string().optional(),
    voterSection: z.string().optional(),
    militaryCertificate: z.string().optional(),
    ctpsSerie: z.string().optional(),
    driversLicense: z.string().optional(),
    driversLicenseNumber: z.string().optional(),
    driversLicenseCategory: z.nativeEnum(driversLicenseCategory).optional(),
    driversLicenseEmissionDate: z.date().optional(),
    driversLicenseExpirationDate: z.date().optional(),
    healthPlan: z.string().optional(),
    healthPlanNumber: z.string().optional(),
    collegeCep: z.string().optional(),
    collegeAddress: z.string().optional(),
    collegeNumber: z.string().optional(),
    collegeNeighborhood: z.string().optional(),
    collegeCity: z.string().optional(),
    collegeState: z.string().optional(),
    college: z.string().optional(),
    collegeCourse: z.string().optional(),
    collegePeriod: z.string().optional(),
    ra: z.string().optional(),
    lifeInsurancePolicy: z.string().optional(),
    jobPosition: z.nativeEnum(employeeCargo).optional(),
    jobFunction: z.string().optional(),
    admissionDate: z.date().optional(),
    period: z.string().optional(),
    contractExpirationDate: z.date().optional(),
    dailyHours: z.string().optional(),
    weeklyHours: z.string().optional(),
    monthlyHours: z.string().optional(),
    hasAccumulated: z.boolean().optional(),
    hasAccumulateCompany: z.string().optional(),
    salary: z.number().optional(),
    bank: z.string().optional(),
    agency: z.string().optional(),
    account: z.string().optional(),
    accountType: z.string().optional(),
    familySalary: z.number().optional(),
    IRPF: z.string().optional(),
    status: z.nativeEnum(employeeContractStatus),
})

const AddNewEmployeeButton = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            email: '',
            employeePhoto: '',
            tagName: '',
            tagLastName: '',
            birthday: new Date(),
            zipCode: '',
            address: '',
            number: '',
            complement: '',
            neighborhood: '',
            city: '',
            state: '',
            country: '',
            phone: '',
            mobile: '',
            naturalness: '',
            nationality: '',
            maritalStatus: employeeMaritalStatus.SOLTEIRO,
            graduation: employeeGraduation.ENSINO_FUNDAMENTAL,
            skinColor: employeeSkinColor.BRANCO,
            partnerName: '',
            partnerCpf: '',
            partnerBirthday: new Date(),
            partnerRG: '',
            transport: false,
            transportValue: 0,
            contactName: '',
            contactPhone: '',
            contactEmail: '',
            employeeRelationship: employeeRelationship.ESPOSA,
            dependentName: '',
            dependentBirthday: new Date(),
            dependentCPF: '',
            employeeRelationshipDependent: employeeRelationship.ESPOSA,
            rg: '',
            rgEmitter: '',
            rgEmissionDate: new Date(),
            cpf: '',
            PIS: '',
            voterTitle: '',
            voterZone: '',
            voterSection: '',
            militaryCertificate: '',
            ctpsSerie: '',
            driversLicense: '',
            driversLicenseNumber: '',
            driversLicenseCategory: driversLicenseCategory.A,
            driversLicenseEmissionDate: new Date(),
            driversLicenseExpirationDate: new Date(),
            healthPlan: '',
            healthPlanNumber: '',
            collegeCep: '',
            collegeAddress: '',
            collegeNumber: '',
            collegeNeighborhood: '',
            collegeCity: '',
            collegeState: '',
            college: '',
            collegeCourse: '',
            collegePeriod: '',
            ra: '',
            lifeInsurancePolicy: '',
            jobPosition: employeeCargo.AUXILIAR_PEDAGOGICO,
            jobFunction: '',
            admissionDate: new Date(),
            period: '',
            contractExpirationDate: new Date(),
            dailyHours: '',
            weeklyHours: '',
            monthlyHours: '',
            hasAccumulated: false,
            hasAccumulateCompany: '',
            salary: 0,
            bank: '',
            agency: '',
            account: '',
            accountType: '',
            familySalary: 0,
            IRPF: '',
            status: employeeContractStatus.ACTIVE,

        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='rounded-full font-bold'>
                    Adicionar Transação
                    <ArrowDownUpIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className='h-5/6'>
                <DialogHeader>
                    <DialogTitle>Adicionar Funcionário</DialogTitle>
                    <DialogDescription>Adicione um novo funcionário preenchendo o formulário abaixo.</DialogDescription>
                </DialogHeader>
                <ScrollArea>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-h-4/6 p-6">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome Completo</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nome Completo do funcionário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Email do funcionário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="employeePhoto"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Foto do funcionário</FormLabel>
                                        <FormControl>
                                            <Input type="file" placeholder="URL da foto do funcionário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="tagName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome para crachá</FormLabel>
                                        <FormControl>
                                            <Input placeholder="nome que aparecerá no crachá" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="tagLastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Sobrenome para crachá</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Sobrenome que aparecerá no crachá" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="birthday"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Data de Nascimento</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} value={field.value.toISOString().split('T')[0]} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="zipCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CEP</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Digite o CEP do funcionário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Endereço</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Verifique se o endereço está correto" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Número</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Número" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="complement"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Complemento</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nome Completo do funcionário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Cidade</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Cidade em que mora o funcionário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Estado</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Estado onde mora o funcionário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Telefone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="(xx) xxxx-xxxx" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="mobile"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Celular</FormLabel>
                                        <FormControl>
                                            <Input placeholder="(xx) x xxxx-xxxx" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="naturalness"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Naturalidade</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Cidade onde nasceu" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="nationality"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nacionalidade</FormLabel>
                                        <FormControl>
                                            <Input placeholder="País de nascimento" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Selecione o gênero" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Gênero</SelectLabel>
                                                    <SelectItem value="MASCULINO">Masculino</SelectItem>
                                                    <SelectItem value="FEMININO">Feminino</SelectItem>
                                                    <SelectItem value="OTHER">Outro</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>

                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="fatherName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome do pai</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nome do pai do funcionário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="motherName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome da mãe</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nome da mãe do funcioário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="maritalStatus"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Estado civil</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Selecione o estado civil" />
                                                </SelectTrigger>

                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Estado Civil</SelectLabel>
                                                    <SelectItem value="SOLTEIRO">Solteiro</SelectItem>
                                                    <SelectItem value="CASADO">Casado</SelectItem>
                                                    <SelectItem value="DIVORCIADO">Divorciado</SelectItem>
                                                    <SelectItem value="VIUVO">Viúvo</SelectItem>
                                                    <SelectItem value="OUTRO">Outro</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="graduation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Graduação</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Nível de Escolaridade do funcionário" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Grau de escolaridade</SelectLabel>
                                                    <SelectItem value="ENSINO_FUNDAMENTAL">Ensino Fundamental</SelectItem>
                                                    <SelectItem value="ENSINO_MEDIO">Ensino Médio</SelectItem>
                                                    <SelectItem value="ENSINO_SUPERIOR_CURSANDO">Ensino Superior Cursando</SelectItem>
                                                    <SelectItem value="ENSINO_SUPERIOR_COMPLETO">Ensino Superior Completo</SelectItem>
                                                    <SelectItem value="POS_GRADUACAO_CURSANDO">Pós-Graduação Cursando</SelectItem>
                                                    <SelectItem value="POS_GRADUACAO_COMPLETO">Pós-Graduação Completo</SelectItem>
                                                    <SelectItem value="MESTRADO_CURSANDO">Mestrado Cursando</SelectItem>
                                                    <SelectItem value="MESTRADO_COMPLETO">Mestrado Completo</SelectItem>
                                                    <SelectItem value="DOUTORADO_CURSANDO">Doutorado Cursando</SelectItem>
                                                    <SelectItem value="DOUTORADO_COMPLETO">Doutorado Completo</SelectItem>
                                                    <SelectItem value="POS_DOUTORADO_CURSANDO">Pós-Doutorado Cursando</SelectItem>
                                                    <SelectItem value="POS_DOUTORADO_COMPLETO">Pós-Doutorado Completo</SelectItem>
                                                    <SelectItem value="OUTRO">Outro</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="skinColor"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Cor de pele</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Nível de Escolaridade do funcionário" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="BRANCO">Branco</SelectItem>
                                                    <SelectItem value="NEGRO">Preto</SelectItem>
                                                    <SelectItem value="AMARELO">Amarelo</SelectItem>
                                                    <SelectItem value="PARDO">Pardo</SelectItem>
                                                    <SelectItem value="INDIGENA">Índigena</SelectItem>
                                                    <SelectItem value="OUTRO">Outro</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="partnerName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome do conjugê</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nome do conjugê do funcioário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="partnerCpf"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CPF do conjugê</FormLabel>
                                        <FormControl>
                                            <Input placeholder="CPF do conjugê do funcioário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="partnerBirthday"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Data de nascimento do conjugê</FormLabel>
                                        <FormControl>
                                            <Input type='date' {...field} value={field.value ? field.value.toISOString().split('T')[0] : ''} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="partnerRG"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>RG do conjugê</FormLabel>
                                        <FormControl>
                                            <Input placeholder="RG do conjugê do funcioário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="transport"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Opção de vale transporte</FormLabel>
                                        <FormControl>
                                            <Input type="checkbox" checked={Boolean(field.value)} onChange={field.onChange} onBlur={field.onBlur} ref={field.ref} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="transportValue"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Valor de vale transporte</FormLabel>
                                        <FormControl>
                                            <MoneyInput placeholder="Valor do vale transporte" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="contactName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome do contato</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nomde do contato de emergência do funcioário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="contactPhone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Telefone do contato
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Telefone do contato de emergência do funcionário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="contactEmail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Email do contato
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email do contato de emergência do funcioário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="employeeRelationship"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Relação do funcionário com o contato
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Selecione o tipo de relacionamento" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="ESPOSA">Esposa</SelectItem>
                                                    <SelectItem value="ESPOSO">Marido</SelectItem>
                                                    <SelectItem value="FILHO">Filho</SelectItem>
                                                    <SelectItem value="FILHA">Filha</SelectItem>
                                                    <SelectItem value="PAI">Pai</SelectItem>
                                                    <SelectItem value="MAE">Mãe</SelectItem>
                                                    <SelectItem value="OUTRO">Outro</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="dependentName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome do dependente</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nome do dependente do funcioário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="dependentBirthday"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Data de nascimento do dependente</FormLabel>
                                        <FormControl>
                                            <Input type='date' {...field} value={field.value ? field.value.toISOString().split('T')[0] : ''} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="dependentCPF"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CPF do dependente</FormLabel>
                                        <FormControl>
                                            <Input placeholder="CPF do dependente do funcioário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="employeeRelationshipDependent"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Relação do funcionário com o contato
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Selecione o tipo de relacionamento" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="ESPOSA">Esposa</SelectItem>
                                                    <SelectItem value="ESPOSO">Marido</SelectItem>
                                                    <SelectItem value="FILHO">Filho</SelectItem>
                                                    <SelectItem value="FILHA">Filha</SelectItem>
                                                    <SelectItem value="PAI">Pai</SelectItem>
                                                    <SelectItem value="MAE">Mãe</SelectItem>
                                                    <SelectItem value="OUTRO">Outro</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="rg"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>RG</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Número do RG" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="rgEmitter"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Orgão emissor do RG</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Digite aqui o orgão emissor" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="rgEmissionDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Data de emissão do RG
                                        </FormLabel>
                                        <FormControl>
                                            <Input type='date' {...field} value={field.value ? field.value.toISOString().split('T')[0] : ''} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="cpf"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CPF</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Número do CPF do funcionário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="PIS"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>PIS / PASEP</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Número do PIS / PASEP" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="voterTitle"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Título de eleitor
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Número do título de eleitor" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="voterZone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Zona eleitoral
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="voterSection"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Seção eleitoral
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="militaryCertificate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Reservista</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Número da Reservista" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="ctpsSerie"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Série da CTPS
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Número da carteira de trabalho" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="driversLicenseNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CNH</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Digite o número da CNH" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="driversLicenseCategory"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Categoria da CNH
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Selecione o tipo de habilitação" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="A">A</SelectItem>
                                                    <SelectItem value="B">B</SelectItem>
                                                    <SelectItem value="C">C</SelectItem>
                                                    <SelectItem value="D">D</SelectItem>
                                                    <SelectItem value="E">E</SelectItem>
                                                    <SelectItem value="AB">AB</SelectItem>
                                                    <SelectItem value="AC">AC</SelectItem>
                                                    <SelectItem value="AD">AD</SelectItem>
                                                    <SelectItem value="AE">AE</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="driversLicenseEmissionDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CNH</FormLabel>
                                        <FormControl>
                                            <Input type='date' {...field} value={field.value ? field.value.toISOString().split('T')[0] : ''} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="driversLicenseExpirationDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CNH</FormLabel>
                                        <FormControl>
                                            <Input type='date' {...field} value={field.value ? field.value.toISOString().split('T')[0] : ''} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="healthPlan"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Plano de Saúde</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Digite o plano de saúde" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="healthPlanNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Número do plano de saúde
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Digite o número do Plano de Saúde" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="collegeCep"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CEP da universidade</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Digite o CEP da instituição de ensino" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="collegeAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Endereço da universidade
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Digite o endereço da instituição de ensino" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="collegeNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Número
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex: 25" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="collegeNeighborhood"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Bairro
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex: Jaçanã" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="collegeCity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Cidade</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex: São Paulo" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="collegeState"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>UF</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex: SP" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="college"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Universidade</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Digite o nome da universidade" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="collegeCourse"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Curso</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Qual o curso universitário?" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="collegePeriod"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Período</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Qual o período do curso?" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="ra"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>RA</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Número do Registro de Aluno" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lifeInsurancePolicy"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Apólice de Seguro de Vida
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Digite o número da Apólice de Seguro de Vida" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="jobPosition"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Cargo
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Selecione o cargo" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="AUXILIAR_PEDAGOGICO">Auxiliar Pedagógico</SelectItem>
                                                    <SelectItem value="PROFESSOR">Professor</SelectItem>
                                                    <SelectItem value="SECRETARIA">Secretária</SelectItem>
                                                    <SelectItem value="PEDAGOGO">Pedagogo</SelectItem>
                                                    <SelectItem value="AUXILIAR_SERVICOS_GERAIS">Auxiliar de serviços gerais</SelectItem>
                                                    <SelectItem value="MOTORISTA">Motorista</SelectItem>
                                                    <SelectItem value="MONITOR">Monitor</SelectItem>
                                                    <SelectItem value="ESTAGIARIO">Estagiário</SelectItem>
                                                    <SelectItem value="COORDENADOR">Coordenador</SelectItem>
                                                    <SelectItem value="DIRETOR">Diretor</SelectItem>
                                                    <SelectItem value="OUTRO">Outro</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="jobFunction"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Função</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Função específica do funcionário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="admissionDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Data de admissão</FormLabel>
                                        <FormControl>
                                            <Input type='date' {...field} value={field.value ? field.value.toISOString().split('T')[0] : ''} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="period"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Período</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Manhã | Tarde | Integral" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="contractExpirationDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Data de término do contrato
                                        </FormLabel>
                                        <FormControl>
                                            <Input type='date' {...field} value={field.value ? field.value.toISOString().split('T')[0] : ''} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="dailyHours"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Horas diárias</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex: 8h" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="weeklyHours"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Horas semanais</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex: 40" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="monthlyHours"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Horas mensais</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex: 160" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="hasAccumulated"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CNH</FormLabel>
                                        <FormControl>
                                            <Input type='checkbox' checked={Boolean(field.value)} onChange={field.onChange} onBlur={field.onBlur} ref={field.ref} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="hasAccumulateCompany"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome da empresa em que acumula</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="salary"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Horas mensais</FormLabel>
                                        <FormControl>
                                            <MoneyInput placeholder="Digite o salário do funcionário" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="bank"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Banco</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex: Itaú" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="agency"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Número da Agência</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex: 0160" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="account"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Número da Conta</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex: 0160-2" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="accountType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Tipo de conta
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Selecione o tipo de conta" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="CONTA_CORRENTE">Conta Corrente</SelectItem>
                                                    <SelectItem value="CONTA_SALARIO">Conta Salário</SelectItem>
                                                    <SelectItem value="CONTA_POUPANÇA">Conta Poupança</SelectItem>
                                                    <SelectItem value="OUTRO">Outra</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="IRPF"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Imposto de Renda</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Status
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Selecione o status do funcionário" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="ATIVO">Ativo</SelectItem>
                                                    <SelectItem value="INATIVO">Inativo</SelectItem>
                                                    <SelectItem value="FERIAS">Férias</SelectItem>
                                                    <SelectItem value="AFASTADO">Afastado</SelectItem>
                                                    <SelectItem value="DEMITIDO">Demitido</SelectItem>
                                                    <SelectItem value="OUTRO">Outro</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>

                                )}
                            />




                            <DialogFooter>
                                <Button variant='outline'>Cancelar</Button>
                                <Button variant='default'>Adicionar</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </ScrollArea>
            </DialogContent>

        </Dialog>
    )
}

export default AddNewEmployeeButton