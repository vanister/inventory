--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3 (Debian 11.3-1.pgdg90+1)
-- Dumped by pg_dump version 11.3

-- Started on 2019-06-17 15:12:51 UTC

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

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16397)
-- Name: Building; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Building" (
    "Id" integer NOT NULL,
    "LocationId" integer NOT NULL,
    "BuildingTypeId" smallint NOT NULL,
    "Name" character varying(255) NOT NULL,
    "Coord" point,
    "Address" character varying(500) NOT NULL,
    "Description" character varying(500),
    "Cost" numeric(9,2)
);


ALTER TABLE public."Building" OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16474)
-- Name: BuildingType; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BuildingType" (
    "Id" smallint NOT NULL,
    "Name" character varying(255) NOT NULL,
    "Description" character varying(500)
);


ALTER TABLE public."BuildingType" OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16615)
-- Name: BuildingType_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."BuildingType" ALTER COLUMN "Id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."BuildingType_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 203 (class 1259 OID 16613)
-- Name: Building_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Building" ALTER COLUMN "Id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Building_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 198 (class 1259 OID 16410)
-- Name: Component; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Component" (
    "Id" integer NOT NULL,
    "BuildingId" integer NOT NULL,
    "ComponentTypeId" smallint NOT NULL,
    "Name" character varying(255) NOT NULL,
    "Cost" numeric(9,2),
    "Location" character varying(255),
    "Description" character varying(500)
);


ALTER TABLE public."Component" OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16491)
-- Name: ComponentType; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ComponentType" (
    "Id" smallint NOT NULL,
    "Name" character varying(255) NOT NULL,
    "Description" character varying(500)
);


ALTER TABLE public."ComponentType" OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16619)
-- Name: ComponentType_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."ComponentType" ALTER COLUMN "Id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."ComponentType_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 205 (class 1259 OID 16617)
-- Name: Component_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Component" ALTER COLUMN "Id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Component_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 196 (class 1259 OID 16389)
-- Name: Location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Location" (
    "Id" integer NOT NULL,
    "Name" character varying(255) NOT NULL,
    "Coord" point,
    "Description" character varying(500),
    "LocationTypeId" smallint NOT NULL
);


ALTER TABLE public."Location" OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 16466)
-- Name: LocationType; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."LocationType" (
    "Id" smallint NOT NULL,
    "Name" character varying(255) NOT NULL,
    "Description" character varying(500)
);


ALTER TABLE public."LocationType" OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16623)
-- Name: LocationType_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."LocationType" ALTER COLUMN "Id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."LocationType_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 207 (class 1259 OID 16621)
-- Name: Location_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Location" ALTER COLUMN "Id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Location_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 202 (class 1259 OID 16499)
-- Name: UserLocation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UserLocation" (
    "Id" integer NOT NULL,
    "LocationId" integer NOT NULL,
    "UserId" uuid NOT NULL
);


ALTER TABLE public."UserLocation" OWNER TO postgres;

--
-- TOC entry 2942 (class 0 OID 0)
-- Dependencies: 202
-- Name: COLUMN "UserLocation"."UserId"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public."UserLocation"."UserId" IS 'This is the Id from the user store.';


--
-- TOC entry 209 (class 1259 OID 16625)
-- Name: UserLocation_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."UserLocation" ALTER COLUMN "Id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."UserLocation_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2924 (class 0 OID 16397)
-- Dependencies: 197
-- Data for Name: Building; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Building" ("Id", "LocationId", "BuildingTypeId", "Name", "Coord", "Address", "Description", "Cost") FROM stdin;
\.


--
-- TOC entry 2927 (class 0 OID 16474)
-- Dependencies: 200
-- Data for Name: BuildingType; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BuildingType" ("Id", "Name", "Description") FROM stdin;
\.


--
-- TOC entry 2925 (class 0 OID 16410)
-- Dependencies: 198
-- Data for Name: Component; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Component" ("Id", "BuildingId", "ComponentTypeId", "Name", "Cost", "Location", "Description") FROM stdin;
\.


--
-- TOC entry 2928 (class 0 OID 16491)
-- Dependencies: 201
-- Data for Name: ComponentType; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ComponentType" ("Id", "Name", "Description") FROM stdin;
\.


--
-- TOC entry 2923 (class 0 OID 16389)
-- Dependencies: 196
-- Data for Name: Location; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Location" ("Id", "Name", "Coord", "Description", "LocationTypeId") FROM stdin;
\.


--
-- TOC entry 2926 (class 0 OID 16466)
-- Dependencies: 199
-- Data for Name: LocationType; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."LocationType" ("Id", "Name", "Description") FROM stdin;
\.


--
-- TOC entry 2929 (class 0 OID 16499)
-- Dependencies: 202
-- Data for Name: UserLocation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."UserLocation" ("Id", "LocationId", "UserId") FROM stdin;
\.


--
-- TOC entry 2943 (class 0 OID 0)
-- Dependencies: 204
-- Name: BuildingType_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."BuildingType_Id_seq"', 1, false);


--
-- TOC entry 2944 (class 0 OID 0)
-- Dependencies: 203
-- Name: Building_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Building_Id_seq"', 1, false);


--
-- TOC entry 2945 (class 0 OID 0)
-- Dependencies: 206
-- Name: ComponentType_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ComponentType_Id_seq"', 1, false);


--
-- TOC entry 2946 (class 0 OID 0)
-- Dependencies: 205
-- Name: Component_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Component_Id_seq"', 1, false);


--
-- TOC entry 2947 (class 0 OID 0)
-- Dependencies: 208
-- Name: LocationType_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."LocationType_Id_seq"', 1, false);


--
-- TOC entry 2948 (class 0 OID 0)
-- Dependencies: 207
-- Name: Location_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Location_Id_seq"', 1, false);


--
-- TOC entry 2949 (class 0 OID 0)
-- Dependencies: 209
-- Name: UserLocation_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."UserLocation_Id_seq"', 1, false);


--
-- TOC entry 2791 (class 2606 OID 16481)
-- Name: BuildingType BuildingType_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BuildingType"
    ADD CONSTRAINT "BuildingType_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 2785 (class 2606 OID 16404)
-- Name: Building Building_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Building"
    ADD CONSTRAINT "Building_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 2793 (class 2606 OID 16498)
-- Name: ComponentType ComponentType_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ComponentType"
    ADD CONSTRAINT "ComponentType_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 2787 (class 2606 OID 16417)
-- Name: Component Component_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Component"
    ADD CONSTRAINT "Component_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 2783 (class 2606 OID 16396)
-- Name: Location Id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Location"
    ADD CONSTRAINT "Id" PRIMARY KEY ("Id");


--
-- TOC entry 2789 (class 2606 OID 16483)
-- Name: LocationType LocationType_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."LocationType"
    ADD CONSTRAINT "LocationType_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 2795 (class 2606 OID 16503)
-- Name: UserLocation UserLocation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserLocation"
    ADD CONSTRAINT "UserLocation_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 2798 (class 2606 OID 16519)
-- Name: Building Building_BuildingTypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Building"
    ADD CONSTRAINT "Building_BuildingTypeId_fkey" FOREIGN KEY ("BuildingTypeId") REFERENCES public."BuildingType"("Id");


--
-- TOC entry 2797 (class 2606 OID 16514)
-- Name: Building Building_LocationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Building"
    ADD CONSTRAINT "Building_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES public."Location"("Id");


--
-- TOC entry 2799 (class 2606 OID 16418)
-- Name: Component Component_BuildingId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Component"
    ADD CONSTRAINT "Component_BuildingId_fkey" FOREIGN KEY ("BuildingId") REFERENCES public."Building"("Id");


--
-- TOC entry 2800 (class 2606 OID 16524)
-- Name: Component Component_ComponentTypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Component"
    ADD CONSTRAINT "Component_ComponentTypeId_fkey" FOREIGN KEY ("ComponentTypeId") REFERENCES public."ComponentType"("Id");


--
-- TOC entry 2796 (class 2606 OID 16509)
-- Name: Location Location_LocationTypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Location"
    ADD CONSTRAINT "Location_LocationTypeId_fkey" FOREIGN KEY ("LocationTypeId") REFERENCES public."LocationType"("Id");


--
-- TOC entry 2801 (class 2606 OID 16504)
-- Name: UserLocation UserLocation_LocationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserLocation"
    ADD CONSTRAINT "UserLocation_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES public."Location"("Id");


-- Completed on 2019-06-17 15:12:54 UTC

--
-- PostgreSQL database dump complete
--

