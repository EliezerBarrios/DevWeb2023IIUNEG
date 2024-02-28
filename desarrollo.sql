--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-02-18 19:04:36

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 4821 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 16475)
-- Name: administrador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.administrador (
    codadmin integer NOT NULL,
    id integer,
    usuarioadmin character varying(30),
    contrasenaadmin character varying(30),
    privilegios character varying(50),
    foto bytea
);


ALTER TABLE public.administrador OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16433)
-- Name: candidato; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.candidato (
    idcandidato integer NOT NULL,
    id integer,
    codexp integer,
    codedu integer,
    usuario character varying(30),
    contrasena character varying(30),
    foto bytea
);


ALTER TABLE public.candidato OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16419)
-- Name: empresa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.empresa (
    codemp integer NOT NULL,
    codofer integer,
    nombreemp character varying(50),
    rubro character varying(50),
    anosfundada integer,
    cantidadempleados integer,
    ubicacion text
);


ALTER TABLE public.empresa OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16409)
-- Name: experiencia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.experiencia (
    codexp integer NOT NULL,
    nombreempresa character varying(80),
    fechainicio date,
    fechaculmin date,
    ramoempresa character varying(50),
    cargoejercido character varying(80)
);


ALTER TABLE public.experiencia OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16402)
-- Name: oferta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.oferta (
    codofer integer NOT NULL,
    titulo character varying(100),
    descripcion text,
    habilidad text,
    rangosalarial integer,
    modalidad character varying(50)
);


ALTER TABLE public.oferta OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16461)
-- Name: reclutador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reclutador (
    idreclu integer NOT NULL,
    id integer,
    usuarioemp character varying(30),
    contrasenaemp character varying(30),
    cargoasoc character varying(50),
    foto bytea
);


ALTER TABLE public.reclutador OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16414)
-- Name: tituloeducacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tituloeducacion (
    codedu integer NOT NULL,
    nombreinstituto character varying(50),
    tiempoduracion character varying(30),
    grado character varying(50),
    auspiciante character varying(50),
    titulobtenido character varying(80)
);


ALTER TABLE public.tituloeducacion OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16397)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id integer NOT NULL,
    nombre character varying(50),
    apellido character varying(50),
    email character varying(50),
    nacionalidad character varying(50),
    fechanacimiento date
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 4815 (class 0 OID 16475)
-- Dependencies: 222
-- Data for Name: administrador; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.administrador (codadmin, id, usuarioadmin, contrasenaadmin, privilegios, foto) FROM stdin;
\.


--
-- TOC entry 4813 (class 0 OID 16433)
-- Dependencies: 220
-- Data for Name: candidato; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.candidato (idcandidato, id, codexp, codedu, usuario, contrasena, foto) FROM stdin;
\.


--
-- TOC entry 4812 (class 0 OID 16419)
-- Dependencies: 219
-- Data for Name: empresa; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.empresa (codemp, codofer, nombreemp, rubro, anosfundada, cantidadempleados, ubicacion) FROM stdin;
\.


--
-- TOC entry 4810 (class 0 OID 16409)
-- Dependencies: 217
-- Data for Name: experiencia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.experiencia (codexp, nombreempresa, fechainicio, fechaculmin, ramoempresa, cargoejercido) FROM stdin;
\.


--
-- TOC entry 4809 (class 0 OID 16402)
-- Dependencies: 216
-- Data for Name: oferta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.oferta (codofer, titulo, descripcion, habilidad, rangosalarial, modalidad) FROM stdin;
\.


--
-- TOC entry 4814 (class 0 OID 16461)
-- Dependencies: 221
-- Data for Name: reclutador; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reclutador (idreclu, id, usuarioemp, contrasenaemp, cargoasoc, foto) FROM stdin;
\.


--
-- TOC entry 4811 (class 0 OID 16414)
-- Dependencies: 218
-- Data for Name: tituloeducacion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tituloeducacion (codedu, nombreinstituto, tiempoduracion, grado, auspiciante, titulobtenido) FROM stdin;
\.


--
-- TOC entry 4808 (class 0 OID 16397)
-- Dependencies: 215
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id, nombre, apellido, email, nacionalidad, fechanacimiento) FROM stdin;
1337	karina	aponte	karinaponte@gmail.com	uruguay	2002-05-17
\.


--
-- TOC entry 4656 (class 2606 OID 16483)
-- Name: administrador administrador_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_id_key UNIQUE (id);


--
-- TOC entry 4658 (class 2606 OID 16481)
-- Name: administrador administrador_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_pkey PRIMARY KEY (codadmin);


--
-- TOC entry 4644 (class 2606 OID 16445)
-- Name: candidato candidato_codedu_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato
    ADD CONSTRAINT candidato_codedu_key UNIQUE (codedu);


--
-- TOC entry 4646 (class 2606 OID 16443)
-- Name: candidato candidato_codexp_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato
    ADD CONSTRAINT candidato_codexp_key UNIQUE (codexp);


--
-- TOC entry 4648 (class 2606 OID 16441)
-- Name: candidato candidato_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato
    ADD CONSTRAINT candidato_id_key UNIQUE (id);


--
-- TOC entry 4650 (class 2606 OID 16439)
-- Name: candidato candidato_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato
    ADD CONSTRAINT candidato_pkey PRIMARY KEY (idcandidato);


--
-- TOC entry 4640 (class 2606 OID 16427)
-- Name: empresa empresa_codofer_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_codofer_key UNIQUE (codofer);


--
-- TOC entry 4642 (class 2606 OID 16425)
-- Name: empresa empresa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_pkey PRIMARY KEY (codemp);


--
-- TOC entry 4636 (class 2606 OID 16413)
-- Name: experiencia experiencia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.experiencia
    ADD CONSTRAINT experiencia_pkey PRIMARY KEY (codexp);


--
-- TOC entry 4634 (class 2606 OID 16408)
-- Name: oferta oferta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT oferta_pkey PRIMARY KEY (codofer);


--
-- TOC entry 4652 (class 2606 OID 16469)
-- Name: reclutador reclutador_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reclutador
    ADD CONSTRAINT reclutador_id_key UNIQUE (id);


--
-- TOC entry 4654 (class 2606 OID 16467)
-- Name: reclutador reclutador_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reclutador
    ADD CONSTRAINT reclutador_pkey PRIMARY KEY (idreclu);


--
-- TOC entry 4638 (class 2606 OID 16418)
-- Name: tituloeducacion tituloeducacion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tituloeducacion
    ADD CONSTRAINT tituloeducacion_pkey PRIMARY KEY (codedu);


--
-- TOC entry 4632 (class 2606 OID 16401)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- TOC entry 4664 (class 2606 OID 16484)
-- Name: administrador administrador_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_id_fkey FOREIGN KEY (id) REFERENCES public.usuario(id);


--
-- TOC entry 4660 (class 2606 OID 16456)
-- Name: candidato candidato_codedu_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato
    ADD CONSTRAINT candidato_codedu_fkey FOREIGN KEY (codedu) REFERENCES public.tituloeducacion(codedu);


--
-- TOC entry 4661 (class 2606 OID 16451)
-- Name: candidato candidato_codexp_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato
    ADD CONSTRAINT candidato_codexp_fkey FOREIGN KEY (codexp) REFERENCES public.experiencia(codexp);


--
-- TOC entry 4662 (class 2606 OID 16446)
-- Name: candidato candidato_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato
    ADD CONSTRAINT candidato_id_fkey FOREIGN KEY (id) REFERENCES public.usuario(id);


--
-- TOC entry 4659 (class 2606 OID 16428)
-- Name: empresa empresa_codofer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_codofer_fkey FOREIGN KEY (codofer) REFERENCES public.oferta(codofer);


--
-- TOC entry 4663 (class 2606 OID 16470)
-- Name: reclutador reclutador_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reclutador
    ADD CONSTRAINT reclutador_id_fkey FOREIGN KEY (id) REFERENCES public.usuario(id);


-- Completed on 2024-02-18 19:04:38

--
-- PostgreSQL database dump complete
--

