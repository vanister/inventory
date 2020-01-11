--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1 (Debian 12.1-1.pgdg100+1)
-- Dumped by pg_dump version 12.1

-- Started on 2020-01-11 06:21:55 UTC

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

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16385)
-- Name: building; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.building (
    id integer NOT NULL,
    location_id integer NOT NULL,
    building_type_id smallint NOT NULL,
    name character varying(255) NOT NULL,
    coord point,
    address character varying(500) NOT NULL,
    description character varying(500),
    cost numeric(9,2),
    image_url character varying(2048)
);


ALTER TABLE public.building OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16399)
-- Name: building_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.building ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.building_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 203 (class 1259 OID 16391)
-- Name: building_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.building_type (
    id smallint NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(500)
);


ALTER TABLE public.building_type OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16397)
-- Name: building_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.building_type ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.building_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 206 (class 1259 OID 16401)
-- Name: component; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.component (
    id integer NOT NULL,
    building_id integer NOT NULL,
    component_type_id smallint NOT NULL,
    name character varying(255) NOT NULL,
    cost numeric(9,2),
    location character varying(255),
    description character varying(500),
    image_url character varying(2048)
);


ALTER TABLE public.component OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16415)
-- Name: component_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.component ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.component_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 207 (class 1259 OID 16407)
-- Name: component_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.component_type (
    id smallint NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(500)
);


ALTER TABLE public.component_type OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16413)
-- Name: component_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.component_type ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.component_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 210 (class 1259 OID 16417)
-- Name: location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.location (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    coord point,
    description character varying(500),
    location_type_id smallint NOT NULL,
    image_url character varying(2048)
);


ALTER TABLE public.location OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16431)
-- Name: location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.location ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.location_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 211 (class 1259 OID 16423)
-- Name: location_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.location_type (
    id smallint NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(500)
);


ALTER TABLE public.location_type OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16429)
-- Name: location_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.location_type ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.location_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 214 (class 1259 OID 16433)
-- Name: user_location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_location (
    id integer NOT NULL,
    location_id integer NOT NULL,
    user_id uuid NOT NULL
);


ALTER TABLE public.user_location OWNER TO postgres;

--
-- TOC entry 2970 (class 0 OID 0)
-- Dependencies: 214
-- Name: COLUMN user_location.user_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.user_location.user_id IS 'This is the Id from the user store.';


--
-- TOC entry 215 (class 1259 OID 16436)
-- Name: user_location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.user_location ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_location_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2820 (class 2606 OID 16441)
-- Name: building building_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.building
    ADD CONSTRAINT building_pkey PRIMARY KEY (id);


--
-- TOC entry 2822 (class 2606 OID 16439)
-- Name: building_type building_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.building_type
    ADD CONSTRAINT building_type_pkey PRIMARY KEY (id);


--
-- TOC entry 2824 (class 2606 OID 16445)
-- Name: component component_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.component
    ADD CONSTRAINT component_pkey PRIMARY KEY (id);


--
-- TOC entry 2826 (class 2606 OID 16443)
-- Name: component_type component_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.component_type
    ADD CONSTRAINT component_type_pkey PRIMARY KEY (id);


--
-- TOC entry 2828 (class 2606 OID 16447)
-- Name: location id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT id PRIMARY KEY (id);


--
-- TOC entry 2830 (class 2606 OID 16449)
-- Name: location_type location_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location_type
    ADD CONSTRAINT location_type_pkey PRIMARY KEY (id);


--
-- TOC entry 2832 (class 2606 OID 16451)
-- Name: user_location user_location_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_location
    ADD CONSTRAINT user_location_pkey PRIMARY KEY (id);


--
-- TOC entry 2833 (class 2606 OID 16452)
-- Name: building building_building_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.building
    ADD CONSTRAINT building_building_type_id_fkey FOREIGN KEY (building_type_id) REFERENCES public.building_type(id);


--
-- TOC entry 2834 (class 2606 OID 16457)
-- Name: building building_location_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.building
    ADD CONSTRAINT building_location_id_fkey FOREIGN KEY (location_id) REFERENCES public.location(id);


--
-- TOC entry 2835 (class 2606 OID 16462)
-- Name: component component_building_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.component
    ADD CONSTRAINT component_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id);


--
-- TOC entry 2836 (class 2606 OID 16467)
-- Name: component component_component_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.component
    ADD CONSTRAINT component_component_type_id_fkey FOREIGN KEY (component_type_id) REFERENCES public.component_type(id);


--
-- TOC entry 2837 (class 2606 OID 16472)
-- Name: location location_location_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_location_type_id_fkey FOREIGN KEY (location_type_id) REFERENCES public.location_type(id);


--
-- TOC entry 2838 (class 2606 OID 16477)
-- Name: user_location user_location_location_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_location
    ADD CONSTRAINT user_location_location_id_fkey FOREIGN KEY (location_id) REFERENCES public.location(id);


-- Completed on 2020-01-11 06:21:56 UTC

--
-- PostgreSQL database dump complete
--

