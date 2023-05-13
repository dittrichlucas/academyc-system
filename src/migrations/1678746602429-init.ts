import { MigrationInterface, QueryRunner } from "typeorm";

export class init1678746602429 implements MigrationInterface {
    name = 'init1678746602429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "teachers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(
            `CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "teacherId" integer NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(
            `CREATE TABLE "students" ("id" SERIAL NOT NULL, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(
            `CREATE TABLE "attendances" ("id" SERIAL NOT NULL, "studentId" integer NOT NULL, CONSTRAINT "PK_483ed97cd4cd43ab4a117516b69" PRIMARY KEY ("id"))`);
        await queryRunner.query(
            `CREATE TABLE "classes" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(
            `ALTER TABLE "subjects" ADD CONSTRAINT "FK_09338bca25c0e77ea89989dba1d" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(
            `ALTER TABLE "attendances" ADD CONSTRAINT "FK_615b414059091a9a8ea0355ae89" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "attendances" DROP CONSTRAINT "FK_615b414059091a9a8ea0355ae89"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_09338bca25c0e77ea89989dba1d"`);
        await queryRunner.query(`DROP TABLE "classes"`);
        await queryRunner.query(`DROP TABLE "attendances"`);
        await queryRunner.query(`DROP TABLE "students"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "teachers"`);
    }

}
