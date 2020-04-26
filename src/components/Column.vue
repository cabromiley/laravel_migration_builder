<template>
    <v-form>
        <v-text-field v-model="name" label="Column Name" />
        <v-select
        v-model="type"
        :items="items"
        label="Type"
        ></v-select>
        <v-btn color="error" @click="onDelete">Delete</v-btn>
        <v-divider class="my-4"/>
    </v-form>
</template>

<script>
export default {
    props: { index: { type: Number, required: true } },
    data: () => ({
        items: [
            { text: 'String', value: 'string'},
            { text: 'Foreign ID', value: 'foreignId'},
            { text: 'bigIncrements', value: 'bigIncrements'},
            { text: 'bigInteger', value: 'bigInteger'},
            { text: 'binary', value: 'binary'},
            { text: 'boolean', value: 'boolean'},
            { text: 'char', value: 'char'},
            { text: 'date', value: 'date'},
            { text: 'dateTime', value: 'dateTime'},
            { text: 'dateTimeTz', value: 'dateTimeTz'},
            { text: 'decimal', value: 'decimal'},
            { text: 'double', value: 'double'},
            { text: 'float', value: 'float'},
            { text: 'geometry', value: 'geometry'},
            { text: 'geometryCollection', value: 'geometryCollection'},
            { text: 'increments', value: 'increments'},
            { text: 'integer', value: 'integer'},
            { text: 'ipAddress', value: 'ipAddress'},
            { text: 'json', value: 'json'},
            { text: 'jsonb', value: 'jsonb'},
            { text: 'lineString', value: 'lineString'},
            { text: 'longText', value: 'longText'},
            { text: 'macAddress', value: 'macAddress'},
            { text: 'mediumIncrements', value: 'mediumIncrements'},
            { text: 'mediumInteger', value: 'mediumInteger'},
            { text: 'mediumText', value: 'mediumText'},
            { text: 'morphs', value: 'morphs'},
            { text: 'uuidMorphs', value: 'uuidMorphs'},
            { text: 'multiLineString', value: 'multiLineString'},
            { text: 'multiPoint', value: 'multiPoint'},
            { text: 'multiPolygon', value: 'multiPolygon'},
            { text: 'nullableMorphs', value: 'nullableMorphs'},
            { text: 'nullableUuidMorphs', value: 'nullableUuidMorphs'},
            { text: 'nullableTimestamps', value: 'nullableTimestamps'},
            { text: 'point', value: 'point'},
            { text: 'polygon', value: 'polygon'},
            { text: 'set', value: 'set'},
            { text: 'smallIncrements', value: 'smallIncrements'},
            { text: 'smallInteger', value: 'smallInteger'},
            { text: 'softDeletesTz', value: 'softDeletesTz'},
            { text: 'text', value: 'text'},
            { text: 'time', value: 'time'},
            { text: 'timeTz', value: 'timeTz'},
            { text: 'timestamp', value: 'timestamp'},
            { text: 'timestampTz', value: 'timestampTz'},
            { text: 'timestamps', value: 'timestamps'},
            { text: 'timestampsTz', value: 'timestampsTz'},
            { text: 'tinyIncrements', value: 'tinyIncrements'},
            { text: 'tinyInteger', value: 'tinyInteger'},
            { text: 'unsignedBigInteger', value: 'unsignedBigInteger'},
            { text: 'unsignedDecimal', value: 'unsignedDecimal'},
            { text: 'unsignedInteger', value: 'unsignedInteger'},
            { text: 'unsignedMediumInteger', value: 'unsignedMediumInteger'},
            { text: 'unsignedSmallInteger', value: 'unsignedSmallInteger'},
            { text: 'unsignedTinyInteger', value: 'unsignedTinyInteger'},
            { text: 'uuid', value: 'uuid'},
            { text: 'year', value: 'year'},
            { text: 'Integer', value: 'integer' }
        ],
        modifiers: [
            { text: 'autoIncrement', value: 'autoIncrement'},
            { text: 'unsigned', value: 'unsigned'},
            { text: 'useCurrent', value: 'useCurrent'},
            { text: 'always', value: 'always'},
        ]
    }),
    computed: {
        column() {
            return this.$store.getters.column(this.index);
        },
        name: {
            get() {
                return this.column.name;
            },
            set(name) {
                this.$store.dispatch('UPDATE_COLUMN_NAME', { index: this.index, name });
            }
        },
        type: {
            get() {
                return this.column.type;
            },
            set(type) {
                this.$store.dispatch('UPDATE_COLUMN_TYPE', { index: this.index, type });
            }
        }
    },
    methods: {
        onDelete() {
            this.$store.dispatch('DELETE_COLUMN', this.index);
        }
    }
}
</script>